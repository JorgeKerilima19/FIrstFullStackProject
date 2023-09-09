export interface ChildProps {
  feature: { title: string; img: any; description: string; tag?: string[] };
}
export interface JobApplication {
  jobTitle: string;
  jobLocation: string;
  jobType: "Full-Time" | "Part-Time" | "Remote";
  responsibilities: string[];
  qualifications: string[];
  applicationDeadline: Date;
  salary?: number;
  benefits?: string[];
}
