import Image from "next/image";
import { Button } from "../atoms";

export default function BannerCard() {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl">
      <Image src="https://links.papareact.com/4cj" layout="fill" objectFit="cover" alt="banner-image" />
      <div className="absolute mx-5 mt-20 max-w-xs space-y-5 sm:mx-16">
        <h2 className="text-3xl sm:text-4xl">The Greatest Outdoors.</h2>
        <p className="text-lg">Wishlists curated by Airbnb</p>
        <Button label="Get Inspired" variant="secondary" />
      </div>
    </div>
  );
}
