import { Clients } from "../components";
import {
  BannerCareers,
  JobOpening,
  CultureAndValues,
  Benefits,
  OpenPositions,
} from "../components/careers/";

export const Careers = () => {
  return (
    <>
      <section className="min-h-vh flex gap-10 items-center relative overflow-hidden">
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl">Careers at Dworld</h2>
          <span className="font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            tempus purus. Morbi semper, Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Et itaque sint eveniet asperiores.
          </span>
        </div>
        <BannerCareers />
      </section>
      <JobOpening />
      <Clients />
      <CultureAndValues />
      <Benefits />
      <OpenPositions />
    </>
  );
};
