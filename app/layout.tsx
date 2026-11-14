import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedHope | Blood Donation Awareness",
  description: "Learn, share hope, and discover how blood donation supports communities."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}