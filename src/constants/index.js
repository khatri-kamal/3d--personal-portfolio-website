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
  hospice,
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
    title: "HTML, CSS, JavaScript",
    icon: javascript,
    description: "I have idea to create simplefied portfolio website projects with just HTML, CSS and JavaScript. Most of the website is done.",
  },
  {
    title: "Interactive Web Improvement",
    icon: tailwind,
    description: "This has been finished and up in github if you wish to view the project and its code.",
  },
  {
    title: "Python Assignment Improvement",
    icon: python,
    description: "This has also been done and can be viewed in github.",
  },
  {
    title: "Java Android Development",
    icon: java,
    description: "This is something I have been interested and wish to learn.",
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
    title: "Store Assistants Volunteer",
    company_name: "NI Hospice",
    icon: hospice,
    iconBg: "black",
    date: "July 2023 - Present",
    points: [
      "Managed day-to-day charity shop operations, including organising store displays to maintain a tidy and welcoming environment.",
      "Provided exceptional customer service, including greeting and assisting customers with a friendly and helpful attitude, while handling cashier duties accurately, securely, and efficiently with a smile, ensuring customer satisfaction.",
    ],
  },
  {
    title: "Insight Program",
    company_name: "Allstate",
    icon: allstate,
    iconBg: "#E6DEDD",
    date: "3 Day Insight Program",
    points: [
      "Learned about different concepts such as CI/CD, MVP, TDD, Data Visualisation and use of slacks in a team environment.",
      "Learned interview tips, how to use Linked-in, and did a small team exercise where we had to discuss a development of an application, including features, cost, security and testing.",
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
      "Received an introduction to the concepts of creating a website using HTML.",
      "Created a basic website in a group that gives information on types of bins and how to use them correctly, which was subsequently demonstrated to the employers on the last day.",
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
    source_code_link: "https://github.com/khatri-kamal/Interactive-Web-Authoring-Improvement",
    demo_Link: "https://github.com/khatri-kamal",
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
    source_code_link: "https://github.com/khatri-kamal/Python-Assignment-Improvement",
    demo_Link: "https://github.com/khatri-kamal",
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
    source_code_link: "https://github.com/khatri-kamal/Java-Student-Enrollment-Assignment",
    demo_Link: "https://github.com/khatri-kamal",
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