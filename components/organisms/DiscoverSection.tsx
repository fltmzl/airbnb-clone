import { Discover } from "typings";
import { DiscoverCard } from "../molecules";

interface Props {
  discovers: [Discover];
}

export default function DiscoverSection({ discovers }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-semibold md:text-4xl">Live Anywhere</h2>
      <div className="scroll-hide flex space-x-5 overflow-auto">
        {discovers?.map((discover) => (
          <>
            <DiscoverCard img={discover.img} title={discover.title} />
          </>
        ))}
      </div>
    </section>
  );
}
