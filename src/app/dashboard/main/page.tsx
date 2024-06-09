import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Dashboard",
};

const MainPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl p-2 mb-3 bg-slate-800 text-white">
        Dashboard
      </h1>
      <p>Información general</p>
      <WidgetsGrid />
    </div>
  );
};

export default MainPage;
