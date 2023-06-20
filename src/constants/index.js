import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    allstate,
    kainos,
    screen,
    hacked,
    carrent,
    jobit,
    tripguide,
    threejs,
    linkedin,
    springpod,
    python,
    java,
    linux,
    fedora,
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
      id:"projects",
      title: "Projects",

    },
    // {
    //   id: "cv",
    //   title: "Download CV" ,
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Student",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Aspiring Application Developer ",
      icon: mobile,
    },
    {
      title: "Junior Software Developer",
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
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "linux",
      icon: linux,
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
      name: "Three JS",
      icon: threejs,
    },
   
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Virtual Work Experience",
      company_name: "Allstate",
      icon: allstate,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "3 day work experience on Allstate and their different IT department and their roles within the compnay.",
        "Got Introduced to many it sectors within Allsate, such as Data Visualization, Design Team, Cyber Security, Data Analyst.",
        "Learned new concept and Technology such as Test Driven Development, Mules and correct Way to use LinkedIn. ",
        "One the final Day got tour of Allstate and several Interview Tips.",
        "Finally worked on teams to discuss and present concept based on given task by the employees.",
      ],
    },
    {
      title: "Hackathon",
      company_name: "hacked",
      icon: hacked,
      iconBg: "white",
      date: "February 2023 - February 2023",
      points: [
        "One Day hackathon held by EY on green energy in Londonderry.",
        "Given task to analysis several years worth of job data and their location along with transport data all over the Northen Ireland.",
        "Task was to calculate average time taken by employee to reach their work from nearest transport location.",
        "Divided the work to individuals and made a great attempt on the task by the end of the day.",
      ],
    },
    {
      title: "Week Work Experience",
      company_name: "Screen",
      icon: screen,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - Feb 2021",
      points: [
        "Worked on a small animation demonstrated by the employers throughout the week.",
        "Got introduced to several new technologies meant for designing and animations.",
        "Used adobe adobe premiere pro and photoshop to create a animation on the last day.",
      ],
    },
    {
      title: "Week Work Experience",
      company_name: "Kainos",
      icon: kainos,
      iconBg: "white",
      date: "March 2019 - March 2019",
      points: [
        "Working on a teams to develop a sustinable website which infroms what waste to put in which teams.",
        "Collaborating with other individuals to reduce the work load one a signle person.",
        "Worked on power point presentation to show case our ideas to the company employers.",
        "Worked on code review and competed against others teams through presentation of our work.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     text:
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
  
  const projects = [
    {
      name: "Peronsal Website",
      description:
        "As a part of Interactive Web course in Ulster, I had to create a multi page website with several features and animations, including rotation and contact form with error handling and a Jquery to show hidden page once clicked.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Screw Shop",
      description:
        "Aa a part of python assigment, I had to create a terminal based application to manage stocks of different screws, features includes, search for different size screws, reducing r increasing stock level, price calculation, and bar chart to show stock leve in more details",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Student Management",
      description:
        "As a part of Java course, I had to work in pairs to create a terminal based application to add, remove, search, delete and show student details such as male to female ratio and course cost part time and full.",
      tags: [
        {
          name: "java",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, projects, };