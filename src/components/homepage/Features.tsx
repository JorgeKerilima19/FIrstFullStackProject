import { Card } from "..";

import img from "../../../src/assets/images/svg/1.svg";

const features = [
  {
    title: "Feature 1",
    img: img,
    description:
      "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
  },
  {
    title: "Feature 2",
    img: img,
    description:
      "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
  },
  {
    title: "Feature 2",
    img: img,
    description:
      "Praesent fermentum bibendum nibh vitae dictum. Nam aliquam ultricies interdum. Fusce dictum diam nec ante elementum, a pretium magna congue.",
  },
];

export const Features = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="pl-10 flex flex-wrap gap-16">
        <h3 className="text-4xl pr-5 font-medium self-start">
          Why Choose Us?
        </h3>
        <p className="text-lg font-light w-full md:w-3/5 lg:w-3/5">
          Aliquam ultrices arcu vel odio malesuada maximus. Proin congue augue
          ligula. Nulla ut urna enim. Sed mollis ante vulputate odio imperdiet,
          nec maximus nisi placerat. Donec sed tempor sem. Suspendisse convallis
          erat ac lorem interdum, et lacinia mi mollis. Fusce eget tincidunt
          diam. Proin eget tortor venenatis ex consectetur blandit.{" "}
        </p>
      </div>
      <div className="pl-10 grid gap-10 xl:grid-cols-2 bg-gray-100">
        <div className="grid lg:grid-cols-2 gap-20 py-16">
          {features.map((feature, index) => (
            <Card key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
