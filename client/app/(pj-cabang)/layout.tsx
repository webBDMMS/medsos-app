import Sidebar from "@/components/custom/layouts/sidebar";
import Header from "@/components/custom/layouts/header";
import type { Metadata } from "next";
import CustomModal from "@/components/custom/modal";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        <CustomModal />
        {children}
      </main>
    </div>
  );
}
