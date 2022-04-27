import { SearchIcon } from "@heroicons/react/solid";

export default function Searchbar() {
  return (
    <div className="flex justify-between space-x-2 rounded-full border-gray-300 py-2 px-3 md:border-2">
      <input type="text" placeholder="Start your search" className="flex-1 outline-none" />
      <div>
        <SearchIcon className="hidden h-8 w-8 rounded-full bg-red-400 p-2 text-white md:inline-block" />
      </div>
    </div>
  );
}
