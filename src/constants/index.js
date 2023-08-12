import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  linkedin,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github1,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  certificaterd,
  certificateudemy,
  certificateorc,
  certificatejs,
  certificatereactb,
  certificatefcc,
  carrent,
  carrent2,
  carrent3,
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
    link: "#"
  },
  {
    title: "Mern Stack Developer",
    icon: backend,
    link: "#"
  },
  {
    title: "My Github",
    icon: github1,
    link: "https://github.com/shiprachaubey/",
  },
  {
    title: "My LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/shiprachaueby/",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },


];

const experiences = [
  {
    title: "Web developer Intern",
    company_name: "Weborg Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
      "Collaborating with client and content creator to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Defining Firebase schemas for Firestore, Managing data in Cloud storage, and Implementing Firebase services.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "Asthetech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "july 2023 - August 2023",
    points: [
      "Contributed to the development of a  website using HTML, CSS, JS.",
      "Implemented interactive features and dynamic elements with JavaScript to enhance user engagement.:",
       "Ensured a responsive design across various devices using Bootstrap's grid system and components.",
       "Got to learn more about React, worked on some sample projects.",
       "Collaborated with the development team, participating in code reviews and addressing bugs for optimization.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "As an engineering student juggling coursework and web development gigs, I've mastered the art of coding efficiency. Discover shortcuts and code snippets to speed up your development process and boost productivity. ",
    name: "Efficient Coding with Shortcuts & Snippets",
    designation: "#CodingShortcuts #WebDevHacks",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Being both a web developer and an engineering student, I understand the importance of choosing the right JavaScript framework. Dive into this brief comparison of React, Angular, and Vue to find the best fit for your next project. ",
    name: "JavaScript Frameworks: A Quick Comparison",
    designation: "#JavaScript #WebDevelopment",
    company: "",
    image: "",
  },
  {
    testimonial:
      "As a freelancer and engineering student, I've found that optimizing the user experience (UX) is crucial. From intuitive navigation to responsive design, Good UX  will ensure your website leaves a lasting impression.",
    name: "Streamlining UX: Crucial and impressive",
    designation: "#WebDevTips #UXDesign",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Flipkart Clone",
    description:
      "Web-based platform that allows users to see different products of different brands and can buy their product",
    
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJs",
        color: "orange-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://mern-clone-flipkart-p2p.netlify.com/",
  },

  {
    name: "Netflix Clone",
    description:
      "An app to help you manage your movie-watching preferences. You can see the popular, upcomimg movies and also get the details of movies",
      
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     /* {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJs",
        color: "orange-text-gradient",
      },*/
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],  
    image: carrent3,
    source_code_link: "https://tranquil-pony-017a96.netlify.app/",
  },

  {
    name: "Sorting Visualizer",
    description:
      "It helps to sort given array . It also generate new array and sort through different sorting methods like merge sort, quick sort etc",
      tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: carrent2,
    source_code_link: "https://joyful-sundae-24ae14.netlify.app//",
  },

  /*{
    name: "Crypto Exchange",
    description:
      "User-friendly web3 cryptocurrency exchange platform, enabling efficient trading across various blockchain networks. Embracing decentralized technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://crpyto-transaction-app.netlify.app/",
  },
  {
    name: "College Chapter Website",
    description:
      "Designed a wesbite for GeeksforGeeks student Chapter of our college .Designed engaging interfaces and adapted various Bootstrap features..",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://bbdec-gfg-sc.netlify.app/",
  },*/
];
const certificates = [
  {
    name: "Udemy",
    description:
      "React JS Masterclass",
    tags: [
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      {
        name: "",
        color: "",
      },
      
    ],
    image: certificateudemy,
    source_code_link: "https://drive.google.com/file/d/113m4zM8pDQCAet0J3QK2PmdE--Qb5D4q/view?usp=drive_links",
  },
  {
    name: "Oracle",
    description:
      "Database Foundation ",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "orange-text-gradient",
      },
    ],
    image: certificateorc,
    source_code_link: "https://drive.google.com/file/d/118DBDs11dqQiAUxjIrN7k83j_IgzrkQp/view?usp=drive_link",
  },
  
  {
    name: "Red Hat",
    description:
      "Letter of Appreciation for taking IT Apetitude Test",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "orange-text-gradient",
      },
    ],
    image: certificaterd,
    source_code_link: "https://drive.google.com/file/d/114WwkDpzw0ipCICwBCWbfyM9hR4cBmfn/view?usp=drive_link",
  },
  
    
];

export { services, technologies, experiences, testimonials, projects, certificates };
