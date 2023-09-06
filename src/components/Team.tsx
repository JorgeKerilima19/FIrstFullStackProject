import { teamMember } from "./types";

import Eli from "../assets/images/team/Elipheleyt.jpg";
import Seong from "../assets/images/team/Seong.jpg";
import Vesta from "../assets/images/team/Vesta.jpg";

const team: teamMember[] = [
  {
    id: 0,
    name: "Seong-Jin Subhash",
    position: "Chief Executive Officer",
    photo: Seong,
  },
  {
    id: 1,
    name: "Eliphelet Amina",
    position: "Lead Project Manager",
    photo: Eli,
  },
  {
    id: 2,
    name: "Vesta Gülnara",
    position: "Lead Design Officer",
    photo: Vesta,
  },
];

export const Team = () => {
  return (
    <div className="py-20">
      <h3 className="text-5xl pb-16 font-semibold">Our team</h3>
      <div className="flex flex-wrap gap-8 md:gap-10">
        {team.map((member) => (
          <article
            className="w-full md:w-3/12 grid place-items-center"
            key={member.id}
          >
            <img className="object-cover h-96 w-96" src={member.photo} />
            <header className="text-xl font-medium py-2">{member.name}</header>
            <span className="text-lg text-gray-500">{member.position}</span>
          </article>
        ))}
      </div>
    </div>
  );
};
