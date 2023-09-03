import { Features, AboutHome, HomeBanner } from "../components/homepage";
import { Clients, Invitation } from "../components";

export const HomePage = () => {
  return (
    <>
      <section className="relative min-h-vh flex flex-col justify-center gap-12">
        <HomeBanner />
      </section>
      <section className="relative min-h-vh flex flex-col justify-center gap-12 pt-20">
        <Features />
      </section>
      <section className="pl-10 flex gap-12 flex-wrap py-20 text-lg">
        <AboutHome />
      </section>
      <section className="pl-10 text-xl py-20 flex flex-col gap-8 bg-gray-100">
        <Clients />
      </section>
      <Invitation />
    </>
  );
};
