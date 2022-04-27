import Link from "next/link";
import { Container } from "../layouts";
import { GlobeAltIcon, CurrencyDollarIcon } from "@heroicons/react/solid";

const footerData = [
  {
    title: "Support",
    items: ["Help Center", "Safety information", "Cancellation options", "Our COVID-19 Response", "Supporting people with disabilities", "Report a neighborhood concern"],
  },
  {
    title: "Community",
    items: ["Airbnb.org:disaster relief housing", "Support Afghan refugees", "Combating discrimination"],
  },
  {
    title: "Hosting",
    items: ["Try hosting", "AirCover for Hosts", "Explore hosting resources", "Visit our community forum", "How to host reponsibly"],
  },
  {
    title: "About",
    items: ["Newsroom", "Learn about new features", "Letter from our founders", "Careers", "Invertors", "Airbnb Luxe"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      {/* footer section */}
      <Container className="divide-y-2 divide-gray-200 pt-10 xl:grid xl:grid-cols-4 xl:divide-y-0">
        {footerData?.map((item, index) => (
          <section key={index} className="py-5 pr-3">
            {/* footer title item*/}
            <h4 className="mb-4 text-sm font-semibold">{item.title}</h4>

            <ul className="grid space-y-4 md:grid-cols-3 md:gap-2 md:space-y-0 xl:block xl:space-y-4">
              {/* footer sub title*/}
              {item.items.map((item, index) => (
                <li key={index} className="text-sm">
                  <Link href="#">
                    <a className="underline-offset-2 hover:underline">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>

      <Container className="py-5">
        <div className="flex flex-col space-y-5 border-t-2 border-gray-300 pt-5 md:text-center xl:flex-row xl:justify-between">
          {/* left side */}
          <div className="flex flex-col xl:flex-row">
            <div className="mr-5">© 2022 Airbnb, Inc</div>
            <div className="space-x-5">
              <Link href="#">
                <a className="underline-offset-2 hover:underline">Privacy</a>
              </Link>
              <Link href="#">
                <a className="underline-offset-2 hover:underline">Terms</a>
              </Link>
              <Link href="#">
                <a className="underline-offset-2 hover:underline">Sitemap</a>
              </Link>
            </div>
          </div>

          {/* right side */}
          <div className="flex space-x-3">
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="h-5 w-5" />
              <span>English</span>
            </div>
            <div className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-5 w-5" />
              <span>US</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
