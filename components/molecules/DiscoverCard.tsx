import Image from "next/image";
import { Discover } from "typings";

export default function DiscoverCard({ img, title }: Discover) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square h-80 overflow-hidden rounded-xl">
        <Image src={img} layout="fill" className=" bg-slate-500 transition duration-300 group-hover:scale-105" alt={title} />
      </div>
      <h3 className="mt-3 text-xl md:text-2xl">{title}</h3>
    </div>
  );
}
