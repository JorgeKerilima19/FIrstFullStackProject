import { ChildProps } from "../Interfaces";

export const CaseCard = ({ feature }: ChildProps) => {
  return (
    <article className="w-full sm:w-4/5 flex gap-5 flex-col gap-15 tracking-wide leading-relaxed">
      <img className="w-full h-80 object-cover " src={feature.img} alt="" />
      <span className="font-bold">{feature.tag}</span>
      <header className="text-2xl font-semibold">{feature.title}</header>
      <span className="text-lg">{feature.description}</span>
    </article>
  );
};
