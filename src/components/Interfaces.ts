export interface ChildProps {
  feature: { title: string; img: any; description: string; tag?: string[] };
}
export interface JobApplication {
  jobTitle: string;
  jobLocation: string;
  department: "Development" | "Design" | "Analytics";
  jobType: "Full-Time" | "Part-Time" | "Remote" | "Contract";
  responsibilities: string[];
  qualifications: string[];
  applicationDeadline: Date;
  salary?: number;
  benefits?: string[];
}
