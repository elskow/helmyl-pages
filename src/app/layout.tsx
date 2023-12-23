import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Helmyl Pages",
  description: "A personal website of Helmy",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          font.className + " selection:bg-teal-400  bg-zinc-50 text-black"
        }
      >
        {children}
      </body>
    </html>
  );
}
