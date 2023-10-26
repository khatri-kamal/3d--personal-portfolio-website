import React, { useState } from "react";
import { motion } from "framer-motion";

import { services } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, title, icon, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const HandleFlipClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 360 },
  };

  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.45, 0.45)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className={`card-content${isFlipped ? " flipped" : ""}`}
          initial="initial"
          animate={isFlipped ? "flipped" : "initial"}
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          style={{
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col"
          >
            {!isFlipped ? (
              <>
                <img
                  src={icon}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {title}
                </h3>
              </>
            ) : (
              <div className="text-secondary mt-4 flex-grow">
                <p className="h-full">{description}</p>
              </div>
            )}
            <button
              className="bg-btn_colors py-3 px-8 outline-none w-fit 
              text-white font-bold shadow-md shadow-secondary rounded-xl mt-5 opacity-80 hover:opacity-100"
              onClick={HandleFlipClick}
            >
              Flip
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Upcoming = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Ideas.
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Project Ideas</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ProjectCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Upcoming, "");
