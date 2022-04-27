import { Explore } from "typings";
import { ExploreCard } from "../molecules";

interface Props {
  explores: [Explore];
}

export default function ExploreNearbySection({ explores }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-semibold md:text-4xl">Explore Nearby</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {explores?.map((explore, index) => (
          <>
            <ExploreCard key={index} location={explore.location} img={explore.img} distance={explore.distance} />
          </>
        ))}
      </div>
    </section>
  );
}
