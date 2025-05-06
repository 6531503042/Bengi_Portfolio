export interface Experience {
    name: string;
    href: string;
    title: string;
    logo: string;
    start: string;
    end?: string;
    description: string[];
    links?: Link[];
}
  
export interface Link {
    name: string;
    href: string;
    icon: string;
}

export const data: Experience[] = [
  {
    name: "Garena Online Management",
    href: "#",
    title: "Freelance Backend Developer",
    logo: "https://play-lh.googleusercontent.com/oDC8LSrQbPhq9VEf84fnoDx1UPtIRf7wUnaKQPRk3Z_kXXgivcHx_uZ3rF1bubrTg5c",
    start: "May 2025",
    end: "May 2025",
    description: [
      "Delivered an urgent football vote and prize distribution system within 3 days using Go, Next.js, and MongoDB.",
      "Supported 1,000+ users with import/export CSV tools and a real-time admin dashboard."
    ],
    links: [
      {
        name: "Project Repository",
        href: "https://github.com/6531503042/fifa-management-system",
        icon: "github"
      }
    ]
  },
  {
    name: "HLLC-2025",
    href: "#",
    title: "Fullstack Developer",
    logo: "https://archives.mfu.ac.th/wp-content/uploads/2019/06/Mae-Fah-Luang-University-2.png",
    start: "May 2025",
    end: "Jul 2025",
    description: [
      "Designed and developed a campus activity application serving 3,000–4,000 students.",
      "Built real-time check-ins, CMS, gamified scoring, and interactive 3D visual modules using NestJS, Expo, Golang, and Kafka."
    ],
    links: [
      {
        name: "Project Repository",
        href: "https://github.com/6531503042/hllc-2025",
        icon: "github"
      }
    ]
  }
];
