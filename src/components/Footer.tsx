import logo from "../assets/images/logoWhite.svg";

export const Footer = () => {
  return (
    <footer className="relative w-full bottom-0 py-10 bg-red-700 text-white">
      <div className="absolute transform translate-y-[-40px] translate-x-[50%] bg-green-700 w-6/12">
        NewsLetter
      </div>
      <div className="flex flex-col px-7 gap-4">
        <div className="flex justify-between border-b-2 border-b-white pb-4">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" width={50} />
            <h1 className={`text-black-50 font-bold text-2xl text-white`}>
              DNews
            </h1>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-10">
          <div className="min-w-footerItem flex flex-col gap-5">
            <h3 className="text-lg font-semibold border-b-2 border-b-white">
              Contact us
            </h3>
            <ul className="grid gap-4">
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Lima-Peru
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Saint Valley
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Dnews
              </li>
            </ul>
          </div>
          <div className="min-w-footerItem flex flex-col gap-5">
            <h3 className="text-lg font-semibold border-b-2 border-b-white">
              Company
            </h3>
            <ul className="grid gap-4">
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Cases
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Services
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                About us
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Blog
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Careers
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Contact us
              </li>
            </ul>
          </div>
          <div className="min-w-footerItem flex flex-col gap-5">
            <h3 className="text-lg font-semibold border-b-2 border-b-white">
              Details
            </h3>
            <ul className="grid gap-4">
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Services
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Technologies
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Developers
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Careers
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Cities we are in
              </li>
            </ul>
          </div>
          <div className="min-w-footerItem flex flex-col gap-5">
            <h3 className="text-lg font-semibold border-b-2 border-b-white">
              Follow us
            </h3>
            <ul className="grid gap-4">
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Instagram
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Dribble
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Facebook
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Twitter
              </li>
              <li className="border-b-2 border-b-transparent hover:border-b-red-100">
                Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
