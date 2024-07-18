import { Header } from "@/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram | Home",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
