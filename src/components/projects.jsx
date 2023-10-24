import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_Link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "sprint", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold-text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-btn_colors rounded-xl ml-5 mr-10 mt-5 opacity-70 hover:opacity-100">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex justify-center items-center cursor-pointer blue-text-gradient"
            >
              GitHub
            </div>
          </button>

          <button className="bg-btn_colors py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl padding-10 opacity-70 hover:opacity-100">
            <div
              onClick={() => window.open(demo_Link, "_blank")}
              className="flex justify-center items-center cursor-pointer"
            >
              Demo
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Projects.</p>
        <h2 className={`${styles.sectionHeadText}`}>Some Of the things <br /> I worked On.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-[17px] max-2-3xl leading-[30px]"
        >
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
