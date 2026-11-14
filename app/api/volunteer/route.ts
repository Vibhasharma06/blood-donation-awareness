import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validate fields
    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { error: "Please enter a name between 2 and 80 characters." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (
      ![
        "Share awareness",
        "College project / event",
        "Volunteer with a registered camp",
        "Learn more",
      ].includes(interest)
    ) {
      return NextResponse.json(
        { error: "Please select an interest." },
        { status: 400 }
      );
    }
    if (message.length > 500) {
      return NextResponse.json(
        { error: "Message must be 500 characters or fewer." },
        { status: 400 }
      );
    }

    // Load Supabase credentials from environment variables (.env.local)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabasePublishableKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabasePublishableKey) {
      return NextResponse.json(
        { error: "Database configuration is missing. Please check your environment variables." },
        { status: 500 }
      );
    }

    // Initialize Supabase client using the publishable key
    const supabase = createClient(supabaseUrl, supabasePublishableKey);

    // Insert form submission into the volunteer_messages table
    const { error: insertError } = await supabase
      .from("volunteer_messages")
      .insert([
        {
          name,
          email,
          interest,
          message,
        },
      ]);

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: insertError.message || "Failed to save message. Please try again." },
        { status: 500 }
      );
    }

    // Return success response only after successful insertion
    return NextResponse.json({
      ok: true,
      message: `Thank you, ${name}! Your message has been successfully saved.`,
    });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
