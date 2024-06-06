import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/counter");
};

export default page;
