import logo1 from "../assets/images/svg/google.svg";
import logo2 from "../assets/images/svg/toggle.svg";

export const Clients = () => {
  return (
    <section className="pl-5 md:pl-10 text-xl py-20 flex flex-col gap-8 bg-gray-100">
      <h3 className="text-4xl font-semibold">Clients who trust us</h3>
      <span>
        Along our journey we have constructed strong and trusted connection,
        these are some companies we have worked with
      </span>
      <div className="flex justify-center gap-12 flex-wrap">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>
    </section>
  );
};
