import { JobApplication } from "../../components/Interfaces";

export const availableJobs: JobApplication[] = [
  {
    jobTitle: "Frontend Developer",
    jobLocation: "New York, NY",
    jobType: "Full-Time",
    department: "Development",
    responsibilities: [
      "Develop and maintain responsive web applications.",
      "Collaborate with the design team to implement user interfaces.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field.",
      "Proficiency in JavaScript, HTML, and CSS.",
    ],
    applicationDeadline: new Date("2023-09-30"),
    salary: 80000,
    benefits: ["Healthcare coverage", "401(k) retirement plan"],
  },
  {
    jobTitle: "UX/UI Designer",
    jobLocation: "Los Angeles, CA",
    jobType: "Full-Time",
    department: "Design",
    responsibilities: [
      "Create user-centered designs for web and mobile applications.",
      "Conduct user research and usability testing.",
    ],
    qualifications: [
      "Bachelor's degree in Design or related field.",
      "Proficiency in design tools such as Adobe XD or Figma.",
    ],
    applicationDeadline: new Date("2023-10-10"),
    salary: 90000,
    benefits: ["Healthcare coverage", "Generous paid time off"],
  },
  {
    jobTitle: "Data Analyst",
    jobLocation: "San Francisco, CA",
    jobType: "Contract",
    department: "Analytics",
    responsibilities: [
      "Analyze and interpret data to provide actionable insights.",
      "Create data visualizations and reports for stakeholders.",
    ],
    qualifications: [
      "Bachelor's degree in Statistics or a related field.",
      "Proficiency in data analysis tools such as Python or R.",
    ],
    applicationDeadline: new Date("2023-10-15"),
    salary: 75000,
    benefits: ["Flexible work hours", "Professional development opportunities"],
  },
];
