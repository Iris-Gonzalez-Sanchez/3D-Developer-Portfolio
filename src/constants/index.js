import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aamp,
  flatiron,
  mta,
  accenture,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Design Thinking Project",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6E5E5",
    date: "Jan 2021 - May 2021",
    points: [
      "Collaborated with a team of 6 in technology proposal to enhance commuter experience throughout Northeast.",
      "Worked alongside data science consultants in scoping transit technology implementations by analyzing customer experience and data from existing surveys, conducting field studies with commuters, transit workers, and city officials to understand their needs and experiences.",
      "Implemented Accenture's design thinking mindset and the DVF model to elevate the underground transit system in large metropolitan cities in the Northeast areas.",
      "Showcased multiple sprint reviews to stakeholders on proposals for quality and risk management planning",
    ],
  },
  {
    title: "Cyber Security Intern",
    company_name: "MTA | Metropolitan Transit Authority",
    icon: mta,
    iconBg: "#FFFFFF",
    date: "Sept 2021 - Jan 2022",
    points: [
      "Developed a business model with measurable benefits that improve information technology systems and infrastructure for the MTA.",
      "Collaborated with cross-functional teams including cyber security specialists, product managers, and fellow interns towards a solution to these questions: What would be the best way to secure our OT environment? What is the weakest link?",
      "Participated in project reviews and provided constructive feedback to team members.",
      "Presented data-driven solution to board of stakeholders on IT & OT integration strategy toward optimizing cybersecurity metrics by 10%.",
    ],
  },
  {
    title: "Certified Master Project Manager",
    company_name: "AAMP | American Academy of Project Management",
    icon: aamp,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Applied project management expertise to successfully complete a complex skills training platform, increasing training efficiency and profitability through data analysis.",
      "Skilled in creating a WBS and WBS dictionary to decompose project scope into manageable and measurable tasks",
      "Developed project charter expertise to initiate projects and establish goals, objectives, and stakeholders.",
      "Expert in creating a comprehensive requirements traceability matrix to identify, document, track, and deliver project requirements to meet stakeholder expectations.",
    ],
  },
  {
    title: "Full Stack Software Engineer Certification",
    company_name: "Flatiron School",
    icon: flatiron,
    iconBg: "#FFFFFF",
    date: "June 2022 - Sept 2022",
    points: [
      "Learned, assessed on, and implemented new programming languages and concepts in 5 3-week sprints, each phase ending with a project demonstrating comprehension of the material.",
      "Managed JSON Servers, in tandem with Javascript and React.js to create multi and single page applications.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Collaborated with cohort-mates in Pair Coding, using the Driver-Navigator Model, VS-Share, and Git workflows.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, experiences, testimonials, projects };
