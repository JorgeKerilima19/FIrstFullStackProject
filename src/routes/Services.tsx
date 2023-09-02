import img from "../assets/images/svg/1.svg";
import { Card } from "../components";

const services = [
  {
    title: "Software Development",
    chars: [
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
    ],
  },
  {
    title: "Design Services",
    chars: [
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
    ],
  },
];

export const Services = () => {
  return (
    <section>
      <div className="relative min-h-vh flex gap-10 items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl">Our Services</h2>
          <span className="font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            tempus purus. Morbi semper, augue.
          </span>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="grid gap-y-20 w-full">
        {services.map((el) => (
          <article key={el.title} className="grid gap-y-20">
            <header className="text-4xl font-semibold">{el.title}</header>
            <div className="w-full flex gap-10 flex-wrap">
              {el.chars.map((char, index) => (
                <Card key={index} feature={char} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
