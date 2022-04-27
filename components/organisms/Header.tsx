import Image from "next/image";
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Searchbar } from "../atoms";

export default function Header() {
  return (
    <header className="sticky z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left */}
      <div className="items-cente relative flex h-10">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" alt="brand-logo-image" />
      </div>

      {/* middle searchbar */}
      <div className="overflow-hidden pl-5 md:min-w-[280px] ">
        <Searchbar />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-3">
        <p className="hidden cursor-pointer text-gray-500 lg:inline">Become a host</p>
        <GlobeAltIcon className="hidden h-6 cursor-pointer text-gray-500 md:inline-block" />
        <div className="flex items-center space-x-1 rounded-full border-2 border-gray-300 py-2 px-3 text-gray-500">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
