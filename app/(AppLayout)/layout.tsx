import { Header } from "@/widgets";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram | Home",
};

function AppLayout({
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

export default AppLayout;
