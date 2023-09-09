import { PostInterface } from "../../components/Interfaces";
import img1 from "../../assets/images/postImage1.jpg";
import img2 from "../../assets/images/postImage2.png";
import img3 from "../../assets/images/postImage3.jpg";

export const posts: PostInterface[] = [
  {
    title: "UX/UI Design Principles",
    img: img3,
    description:
      "Learn key principles of user experience and user interface design.",
    date: new Date("2023-9-19"),
    readingTime: 12,
    category: "Design",
    author: "Alice Johnson",
  },
  {
    title: "Data Visualization Techniques",
    img: img2,
    description: "Explore effective data visualization methods.",
    date: new Date("2023-09-15"),
    readingTime: 15,
    category: "Analytics",
    author: "Jane Smith",
  },
  {
    title: "Introduction to Web Development",
    img: img1,
    description: "Learn the basics of web development.",
    date: new Date("2023-09-1"),
    readingTime: 10,
    category: "Development",
    author: "John Doe",
  },
];
