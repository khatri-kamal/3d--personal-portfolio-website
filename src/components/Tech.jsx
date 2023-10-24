import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import react from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import git from "../assets/tech/git.png";
import python from "../assets/tech/python.png";
import java from "../assets/tech/java.png";
import linux from "../assets/tech/linux.png";
import { SectionWrapper } from "../hoc";

const Software = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-yellow-600",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 8,
      src: linux,
      title: "Linux",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div name="experience" className="w-full min-h-screen flex flex-col ">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Software</p>
        <h2 className={`${styles.sectionHeadText}`}>Softwares I've Used.</h2>
      </motion.div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Software);
