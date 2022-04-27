import Image from "next/image";
import { Button } from "../atoms";

export default function Banner() {
  return (
    <div className="darken-background relative min-h-[300px] bg-slate-500 md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
      <Image src="https://shorturl.at/bnyGN" layout="fill" objectFit="cover" objectPosition="center" quality={100} />
      <div className="absolute top-1/2 z-20 w-full -translate-y-1/2 space-y-6 px-5 text-center">
        <h1 className="text-2xl font-bold text-white md:text-4xl">Let your curiosity do the booking</h1>
        <Button label="I'm flexible" />
      </div>
    </div>
  );
}
