import placeholder from "../../public/placeholder.jpg";

export const data = {
  // Personal Information
  name: "Tobias Burman",
  title: "Software Engineer ● UI/UX Designer",
  roles: {
    primary: "Software Engineer",
    secondary: "UI/UX Designer",
  },
  summary:
    "I'm a passionate Software Engineer based in Jordan, currently studying Software Engineering. Alongside my studies, I'm working as a Software Development Engineer intern at Amazon and am the founder of Arabic-Poetry.net. I have a strong interest in UI/UX design and am committed to creating visually stunning and user-friendly websites. I'm looking forward to exploring new opportunities to enhance my skills.",
  profileImage: placeholder,

  // Navigation Links
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/TobiasBurmanCV.pdf" },
  ],

  // Social Media Links
  social: {
    email: "tobias.burman99@gmail.com",
    github: "https://github.com/tobiasburman",
    linkedin: "https://www.linkedin.com/in/tobiasburman/",
    resume: "/TobiasBurmanCV.pdf",
  },

  // About Section
  about: {
    past: {
      title: "Past",
      content:
        "I discovered my passion for programming when I was just 14 years old. At first, it was just a hobby, but I quickly became interested in web development and the creative possibilities it offered. Over the years, I continued to develop my skills and fell more in love with building websites.",
    },
    present: {
      title: "Present",
      content:
        "Currently, I am a software engineering student at Mutah University. I am also a Software Development Engineer intern at Amazon, where I gain valuable experience in a professional setting. Additionally, I am the founder of Arabic-Poetry.net, a platform dedicated to Arabic poetry.",
    },
    future: {
      title: "Future",
      content:
        "Looking ahead, I'm excited about the future of programming and the endless opportunities it presents. I'm confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.",
    },
  },

  // Skills Section
  skills: {
    "Front End": [
      "HTML",
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "Redux",
      "Astro",
      "Recoil",
      "GraphQL",
      "Apollo",
      "Firebase",
    ],
    "Styling & Design": [
      "CSS",
      "SASS",
      "BootStrap",
      "Tailwind CSS",
      "CSS Module",
      "Figma",
      "Styled-Components",
    ],
    Miscellaneous: [
      "Git",
      "Jest",
      "Cypress",
      "Playwright",
      "react-testing-library",
      "Webpack",
      "UI/UX design processes",
      "REST APIs",
    ],
  },

  // Projects Section
  projects: [
    {
      title: "Admin Panel for Reeler",
      description: [
        "Guide Management: One section allows users to create, edit, and manage guide topics.",
      "Video Upload System: Another section lets users upload instructional videos with:",
      "- Title, description, and YouTube link fields",
      "- Thumbnail upload support",
      "- Visibility settings for private or public videos",
      "Intuitive UI: Drag-and-drop sorting and seamless content editing."
      ],
      image: "/placeholder.svg",
      technologies: [
        "TypeScript",
        "React",
        "Redux",
        "Firebase",
        "Bootstrap",
      ],
      liveLink: "#",
    },
    {
      title: "Shawerr",
      description:
        "Comprehensive consultancy platform built to connect experts with clients seeking professional guidance across various fields. Features include real-time chat, video consultations, and secure payment processing.",
      image: "/placeholder.svg",
      technologies: [
        "TypeScript",
        "SvelteKit",
        "Svelte",
        "TailwindCSS",
        "Firebase",
      ],
      liveLink: "#",
    },
  ],

  // Want To Section
  wantTo: {
    jobOpportunity: {
      title: "offer job opportunity?",
      content:
        "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    connect: {
      title: "Connect?",
      content:
        "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    buildSomething: {
      title: "Build something?",
      content:
        "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  },

  // Footer
  footer: {
    copyright: "© 2025-present Tobias Burman. All Rights Reserved",
  },

  // Theme
  theme: {
    colors: {
      accent: "#FF1493", // Hot pink color used throughout the site
      background: {
        start: "#1a1f2e",
        end: "#2d1b2d",
      },
    },
  },
};
