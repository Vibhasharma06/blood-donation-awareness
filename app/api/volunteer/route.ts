import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json({ error: "Please enter a name between 2 and 80 characters." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!["Share awareness", "College project / event", "Volunteer with a registered camp", "Learn more"].includes(interest)) {
      return NextResponse.json({ error: "Please select an interest." }, { status: 400 });
    }
    if (message.length > 500) {
      return NextResponse.json({ error: "Message must be 500 characters or fewer." }, { status: 400 });
    }

    // Demo backend: validates input but deliberately does not store personal information.
    return NextResponse.json({
      ok: true,
      message: `Thanks, ${name}! Your demo message passed validation. Connect a database to save submissions.`
    });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}