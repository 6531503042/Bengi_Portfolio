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
        name: "SEEZ Dev",
        href: "#",
        title: "Fullstack Developer",
        logo: "public/projects/logo.svg",
        start: "Mar 2025",
        end: "Present",
        description: [
          "พัฒนาและดูแลระบบ Web Application ทั้งฝั่ง Frontend และ Backend",
          "ใช้เทคโนโลยี Go, React, Next.js, และ MongoDB",
          "ออกแบบระบบ Chat, Notification, และ Dashboard สำหรับการใช้งานแบบ Real-time",
          "วางโครงสร้างโปรเจกต์ตามหลัก Clean Architecture พร้อมด้วยระบบ CI/CD และ Containerized Deployment"
        ],
        links: [
          {
            name: "Company Website",
            href: "https://seezdev.com",
            icon: "globe"
          }
        ]
      },
      {
        name: "HLLC-2025",
        href: "#",
        title: "Backend Architecture Designer",
        logo: "/company-logos/hllc2025.png",
        start: "May 2025",
        end: "Jul 2025",
        description: [
          "ออกแบบสถาปัตยกรรม Backend โดยใช้ Clean Architecture และ Modular Design",
          "ตั้งค่าและจัดการระบบ Microservices ด้วย Go และ MongoDB",
          "วางระบบ gRPC และ REST API ให้สามารถทำงานร่วมกันได้อย่างยืดหยุ่น",
          "ปรับใช้ระบบ Logging, Error Handling, และ Middleware ให้สามารถขยายได้ในระยะยาว"
        ],
        links: [
          {
            name: "Project Repository",
            href: "https://github.com/HLLC-MFU/HLLC-2025",
            icon: "globe"
          }
        ]
      }
]