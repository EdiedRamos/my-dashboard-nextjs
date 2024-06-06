import { CartCounter } from "@/app/shopping-cart/Components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart Section",
};

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-black">Carts products</h1>
      <CartCounter initialCartCounter={10} />
    </div>
  );
};

export default CounterPage;
