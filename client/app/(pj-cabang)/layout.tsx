'use client'
import Sidebar from "@/components/custom/layouts/sidebar";
import Header from "@/components/custom/layouts/header";
import CustomModal from "@/components/custom/modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex">
        <Sidebar />
        <main className="w-full flex-1 overflow-hidden">
          <Header />
          <CustomModal />
          {children}
        </main>
      </div>
    </QueryClientProvider>
  );
}
