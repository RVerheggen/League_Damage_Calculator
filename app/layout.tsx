import type { Metadata } from "next";
import { headers } from "next/headers";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description = "Build live-patch League champion combat scenarios and inspect every point of damage before and after mitigation.";
  return {
    metadataBase: new URL(origin),
    applicationName: "Damage Lab",
    title: "Damage Lab - League Combat Calculator",
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      type: "website",
      url: origin,
      title: "Damage Lab - League Combat Calculator",
      description,
      images: [{ url: `${origin}/damage-lab-social.png`, width: 1736, height: 907, alt: "Damage Lab combat analysis prism" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Damage Lab - League Combat Calculator",
      description,
      images: [`${origin}/damage-lab-social.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
