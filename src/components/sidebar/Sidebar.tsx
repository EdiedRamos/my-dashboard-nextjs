import { MdCatchingPokemon, MdDashboard, MdFavorite } from "react-icons/md";

import { FaDatabase } from "react-icons/fa6";
import Image from "next/image";
import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <MdDashboard />,
    title: "Dashboard",
    subtitle: "Your Dashboard",
  },
  {
    path: "/dashboard/counter",
    icon: <FaDatabase />,
    title: "Counter",
    subtitle: "Local State",
  },
  {
    path: "/dashboard/pokemons",
    icon: <MdCatchingPokemon />,
    title: "Pokemons",
    subtitle: "Check it out pokemons",
  },
  {
    path: "/dashboard/favorites",
    icon: <MdFavorite />,
    title: "Favoritos",
    subtitle: "Mira tus pokemones favoritos",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-72 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <RiNextjsFill className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={32}
              height={32}
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/26899056?s=400&u=729d0da355b489d04e7ff80395bb75300118d31b&v=4"
              alt="user profile image"
            />
          </span>
          <span className="text-sm md:text-base font-bold">EdiedRamos</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6 flex flex-col gap-3">
        {menuItems.map((menuItem) => (
          <SidebarMenuItem key={menuItem.path} {...menuItem} />
        ))}
      </div>
    </div>
  );
};
