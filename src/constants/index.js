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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fairfax_collegiate,
    weather,
    texttospeech,
    personal_website,
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
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
      title: "Python Teacher Assistant",
      company_name: "Fairfax Collegiate",
      icon: fairfax_collegiate,
      iconBg: "#383E56",
      date: "July 2023 - August 2023",
      points: [
        "Assisted with teacher lectures by ensuring no mistakes were made, often gave impromptu ones to students struggling with concepts.",
        "Worked individually with students to help debug their programs and offer more in-depth and personalized lessons.",
        "Responsible for teaching students various sorting algorithmns, data structures, boolean logic, and game design.",
        "Filled in for other teachers during abscences and monitored students during breaks to ensure their safety.",
      ],
    },
    {
      title: "Paid Intern",
      company_name: "AirTac Customs",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Maintained the company website, ensuring correct stocks were displayed and updating product descriptions, images, and prices.",
        "Used HTML, CSS, JavaScript, and a Shopify-specific programming language called Liquid.",
        "Organized inventory space, worked with customers in customer support, and designed advertisements for new products.",
        "Performed market research to determine prices competitors were selling at to determine company's pricing strategy.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Text-to-Speech App",
      description:
        "Web-based platform that allows users to type in any message and hear AI voice it over, features different accents.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: texttospeech,
      live_link: "https://2023evanz.github.io/text-to-speech/text_index.html",
      source_code_link: "https://github.com/2023EvanZ/2023EvanZ.github.io/tree/main/text-to-speech",
    },
    {
      name: "Weather App",
      description:
        "Web application that enables users to search for current weather conditions in any city they wish.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      live_link: "https://2023evanz.github.io/weather%20app/weather_index.html",
      source_code_link: "https://github.com/2023EvanZ/2023EvanZ.github.io/tree/main/weather%20app",
    },
    {
      name: "Old Website",
      description:
        "My original website that I coded from scratch. Includes my resume and more fun facts about me!",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: personal_website,
      live_link: "https://2023evanz.github.io/",
      source_code_link: "https://github.com/2023EvanZ/2023EvanZ.github.io",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };