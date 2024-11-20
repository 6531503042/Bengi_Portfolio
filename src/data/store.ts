import { DataStore } from '@/types';

export const data: DataStore = {
  career: [
    {
      name: "DBS Bank",
      href: "https://www.dbs.com.sg",
      title: "Graduate Associate (SEED Programme)",
      logo: "/dbs.png",
      start: "Jul 2023",
      description: [
        "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
        "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
      ]
    },
    {
      name: "Singapore Institute of Technology",
      href: "https://www.singaporetech.edu.sg",
      title: "Software Developer (Contract)",
      logo: "/sit.png",
      start: "Apr 2023",
      end: "Jun 2023",
      description: [
        "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
        "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
      ],
      links: [
        {
          name: "NFTVue",
          href: "https://nftvue.vercel.app",
          icon: "globe"
        }
      ]
    },
    {
      name: "DBS Bank",
      href: "https://www.dbs.com.sg",
      title: "Software Developer (Intern)",
      logo: "/dbs.png",
      start: "May 2022",
      end: "Dec 2022",
      description: [
        "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
        "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular"
      ]
    },
    {
      name: "Activate Interactive Pte Ltd",
      href: "https://www.activate.sg",
      title: "Software Developer (Intern)",
      logo: "/activate.png",
      start: "May 2019",
      end: "Aug 2019",
      description: [
        "Developed RP Connect, the iOS and Android mobile app for Republic Polytechnic using React Native"
      ]
    }
  ],
  education: [
    {
      name: "Mae Fah Luang University",
      href: "https://mfu.ac.th",
      title: "Bachelor of Engineering in Software Engineering",
      logo: "https://agroindustry.mfu.ac.th/wp-content/uploads/2018/07/icon_logo.png",
      start: "2021",
      description: [
        "Currently pursuing my bachelor's degree",
        "3rd Year Student",
        "School of Information Technology"
      ]
    }
  ],
  projects: [
    {
      name: "Tradingview Telegram Alerts",
      description: "Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes",
      image: "/tv-tele-alerts.png",
      tags: [
        "Python",
        "FastAPI",
        "Docker",
        "Fly.io",
        "Selenium",
        "Telegram Bot API"
      ],
      links: [
        {
          name: "Source",
          href: "https://github.com/tedawf/tradingview-telegram-alerts",
          icon: "github"
        }
      ]
    },
    {
      name: "NFTVue",
      description: "Non-Fungible Tokens (NFTs) Gallery Viewer website that allows users to connect their crypto wallets to view and verify their tokens",
      href: "https://nftvue.vercel.app",
      image: "/nftvue.png",
      tags: [
        "NextJS",
        "TailwindCSS",
        "MetaMask",
        "WalletConnect",
        "Web3",
        "NFTScan",
        "HashKey DID"
      ],
      links: [
        {
          name: "Website",
          href: "https://nftvue.vercel.app",
          icon: "globe"
        }
      ]
    },
    {
      name: "Portfolio 2023 (Outdated)",
      description: "Simple markdown portfolio made with Astro 🚀",
      href: "https://tedawf-dot-com.netlify.app",
      image: "/old-portfolio.png",
      tags: ["Astro", "TailwindCSS", "Netlify", "SEO"],
      links: [
        {
          name: "Website",
          href: "https://tedawf-dot-com.netlify.app",
          icon: "globe"
        },
        {
          name: "Source",
          href: "https://github.com/tedawf/portfolio-2023",
          icon: "github"
        }
      ]
    },
    {
      name: "Rapid Ride Fight (Final Year)",
      description: "3D capture-the-flag, multiplayer boat fighting, with smart AI and water graphics",
      href: "https://games.digipen.edu/games/rapid-ride-fight",
      image: "/rrf.png",
      tags: ["C/C++", "OpenGL", "Custom Game Engine", "3D"],
      links: [
        {
          name: "Gameplay",
          href: "https://www.youtube.com/watch?v=bge3fiypg5U",
          icon: "youtube"
        },
        {
          name: "Trailer",
          href: "https://www.youtube.com/watch?v=PNAO-aI1Daw",
          icon: "youtube"
        }
      ]
    },
    {
      name: "Glowing Under (2nd Year)",
      description: "2D platformer with a focus on puzzle-solving, no-death exploration and storytelling",
      href: "https://games.digipen.edu/games/glowing-under",
      image: "/gu.png",
      tags: ["C/C++", "OpenGL", "Custom Game Engine", "2D"],
      links: [
        {
          name: "Trailer",
          href: "https://www.youtube.com/watch?v=u6RYwBZlSfg",
          icon: "youtube"
        }
      ]
    }
  ]
};
