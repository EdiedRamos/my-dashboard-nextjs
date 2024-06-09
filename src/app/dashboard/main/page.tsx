import { SimpleWidget } from "@/components";

const MainPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl p-2 mb-3 bg-slate-800 text-white">
        Dashboard
      </h1>
      <p>Información general</p>
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
      </div>
    </div>
  );
};

export default MainPage;
