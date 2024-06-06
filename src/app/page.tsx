import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/main");
};

export default page;
