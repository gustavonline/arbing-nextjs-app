import { Hero } from "./hero";
import { Service } from "./service";
import { Socials } from "./socials";
import { Testimonals } from "./testimonals";

export const Landing = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Testimonals />
      <Socials />
      {/* footer */}
    </div>
  );
};
