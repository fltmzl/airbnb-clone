import Image from "next/image";
import { Explore } from "typings";

export default function ExploreCard({ location = "London", img = "", distance = "40-minutes drive" }: Explore) {
  return (
    <div className="flex cursor-pointer items-center space-x-4 rounded-xl transition duration-300 ease-out hover:scale-105 hover:bg-gray-100">
      <Image src={img} width={64} height={64} className="rounded-xl bg-slate-400" alt={location} />
      <div>
        <h3 className="font-medium">{location}</h3>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
