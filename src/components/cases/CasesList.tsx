import { CaseCard } from ".";
import { infoType } from "../types";

import Carousel from "@itseasy21/react-elastic-carousel";

const posts: infoType[] = [
  {
    title: "Title 1",
    img: "https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tag: ["Ux/Design", "Research"],
    description:
      " Duis dapibus, urna non hendrerit sagittis, eros velit porttitor metus, eleifend imperdiet dolor metus vitae lacus. Nunc pharetra eu risus non commodo. In feugiat est ac nulla pretium, sit amet maximus odio lacinia. In hac habitasse platea dictumst. Aenean aliquet elementum neque quis dignissim. ",
  },
  {
    title: "Title 1",
    img: "https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tag: ["Ux/Design", "Research"],
    description:
      " Duis dapibus, urna non hendrerit sagittis, eros velit porttitor metus, eleifend imperdiet dolor metus vitae lacus. Nunc pharetra eu risus non commodo. In feugiat est ac nulla pretium, sit amet maximus odio lacinia. In hac habitasse platea dictumst. Aenean aliquet elementum neque quis dignissim. ",
  },
  {
    title: "Title 1",
    img: "https://images.unsplash.com/photo-1682687979601-082a1295b78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tag: ["Ux/Design", "Research"],
    description:
      " Duis dapibus, urna non hendrerit sagittis, eros velit porttitor metus, eleifend imperdiet dolor metus vitae lacus. Nunc pharetra eu risus non commodo. In feugiat est ac nulla pretium, sit amet maximus odio lacinia. In hac habitasse platea dictumst. Aenean aliquet elementum neque quis dignissim. ",
  },
  {
    title: "Title 2",
    img: "https://plus.unsplash.com/premium_photo-1661894232140-73d96a67731b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: ["Ux/Design", "Research"],
    description:
      " Duis dapibus, urna non hendrerit sagittis, eros velit porttitor metus, eleifend imperdiet dolor metus vitae lacus. Nunc pharetra eu risus non commodo. In feugiat est ac nulla pretium, sit amet maximus odio lacinia. In hac habitasse platea dictumst. Aenean aliquet elementum neque quis dignissim. ",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 800, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3 },
];

export const CasesList = () => {
  return (
    <Carousel isRTL={false} breakPoints={breakPoints} itemPadding={[0, 10]}>
      {posts.map((feature, index) => (
        <CaseCard key={index} feature={feature} />
      ))}
    </Carousel>
  );
};
