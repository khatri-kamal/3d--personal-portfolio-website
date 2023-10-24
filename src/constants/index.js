import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  allstate,
  kainos,
  screen,
  hacked,
  linkedin,
  springpod,
  python,
  java,
  linux,
  website,
  pythonAssignment,
  JavaAssignment,
  CV,
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
    id: "projects",
    title: "Projects",

  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Rect and Tailwindcss Project",
    icon: reactjs,
    description: "I will be learning more about how to create a website using React and Tailwindcss. This is so that I can improve my website assignment.",
  },
  {
    title: "Interactive Web Improvement",
    icon: tailwind,
    description: "I will use what I learned during the courses to imporve my Website assignment using React and Tailwindcss.",
  },
  {
    title: "Python Assignment Improvement",
    icon: python,
    description: "I will be adding GUI to my assignment and improve anything else I need to.",
  },
  {
    title: "Java Assignment Improvement",
    icon: java,
    description: "I will also be adding GUI to this assigment as well and improve anything I could.",
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
    styles: 'shadw-orange-500'
  },
  {
    name: "CSS",
    icon: css,
    styles: 'shadw-blue-500'
  },
  {
    name: "python",
    icon: python,
    styles: 'shadw-orange-500'
  },
  {
    name: "java",
    icon: java,
    styles: 'shadw-orange-500'
  },
  {
    name: "git",
    icon: git,
    styles: 'shadw-orange-500'
  },
  {
    name: "linux",
    icon: linux,
    styles: 'shadw-orange-500'
  },
  {
    name: "JavaScript",
    icon: javascript,
    styles: 'shadw-yellow-500'
  },

  {
    name: "React JS",
    icon: reactjs,
    styles: 'shadw-blue-600'
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    styles: 'shadw-sky-400'
  },
];

const experiences = [
  {
    title: "Virtual Work Experience",
    company_name: "Allstate",
    icon: allstate,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "During my 3-day work experience at Allstate, I had the opportunity to explore various IT departments and learn about their roles within the company. I was introduced to different sectors, including Data Visualization, Design Team, Cyber Security, and Data Analysis.",
      "I gained valuable knowledge and experience in several areas, such as Test Driven Development, Mules, and the correct way to utilize LinkedIn.",
      "Learned new concept and Technology such as Test Driven Development, Mules and correct Way to use LinkedIn. ",
      "On the final day, I had the privilege of taking a tour of Allstate's facilities and received valuable interview tips.",
      "I had the opportunity to collaborate with teams to discuss and present concepts based on tasks assigned by the employees.",
    ],
  },
  {
    title: "Hackathon",
    company_name: "hacked",
    icon: hacked,
    iconBg: "white",
    date: "February 2023 - February 2023",
    points: [
      "Participated in a one-day hackathon held by EY on green energy in Londonderry.",
      "Assigned the task of analyzing several years' worth of job data and their locations, along with transport data throughout Northern Ireland.",
      "The objective was to calculate the average time taken by employees to reach their workplaces from the nearest transport location.",
      "Divided the work among team members and made a significant effort to complete the task by the end of the day.",
    ],
  },
  {
    title: "Week Work Experience",
    company_name: "Screen",
    icon: screen,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Feb 2021",
    points: [
      "Collaborated on a small animation project showcased by the employers throughout the week.",
      "Gained exposure to various new technologies specifically designed for animation and design purposes.",
      "Utilized Adobe Premiere Pro and Photoshop to create a captivating animation on the final day.",
    ],
  },
  {
    title: "Week Work Experience",
    company_name: "Kainos",
    icon: kainos,
    iconBg: "white",
    date: "March 2019 - March 2019",
    points: [
      "Collaborating in a team to develop a sustainable website that educates users about proper waste disposal categorization.",
      "Working collectively with other team members to distribute the workload and ensure efficiency.",
      "Creating a comprehensive PowerPoint presentation to showcase our innovative ideas to company executives.",
      "Participating in code reviews and presenting our work in a competitive environment against other teams.",
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
      "Developed a dynamic multi-page website using HTML, CSS, JavaScript, and jQuery, incorporating captivating animations, rotation effects, a contact form with error handling, and hidden page functionality, to create an engaging user experience and showcase programming skills.",
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
    image: website,
    source_code_link: "https://github.com/",
    demo_Link: "https://www.youtube.com/",
    category: "Website",
  },
  {
    name: "Stock Level Management",
    description:
      "In a Python assignment, I successfully developed a terminal-based application that efficiently manages stocks of various screws, offering features such as searching for different sizes of screws, adjusting stock levels, performing price calculations, and displaying a detailed bar chart to visualize stock levels effectively.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: pythonAssignment,
    source_code_link: "https://github.com/",
    demo_Link: "https://www.youtube.com/",
    category: "Python",
  },
  {
    name: "Student Management",
    description:
      "As part of a Java course, my partner and I collaborated to develop a terminal-based application that effectively handles student data, providing functionalities such as adding, removing, searching, and deleting student details, including male-to-female ratio calculation and course cost differentiation between part-time and full-time students.",
    tags: [
      {
        name: "java",
        color: "green-text-gradient",
      },
    ],
    image: JavaAssignment,
    source_code_link: "https://github.com/",
    demo_Link: "https://www.youtube.com/",
    category: "Java",
  },
];
const DownloadCV = [
  {
    title: "Download CV",
    download: CV,
  },
];
export { services, technologies, experiences, projects, DownloadCV };