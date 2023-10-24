import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
      >
        Computer science student with a passion for learning and a strong
        foundation in programming principles. Eager to apply theoretical
        knowledge and practical skills in a challenging environment. Dedicated
        to continuously expanding my understanding of cutting-edge technologies
        and seeking opportunities to contribute to innovative projects.
        Committed to growth, collaboration, and delivering high-quality
        solutions.
      </motion.p>
    </>
  );
};
export default SectionWrapper(About, "about");
