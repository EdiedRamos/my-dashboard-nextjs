import { Sidebar } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-black selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
