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
        Computing science student excited to contribute my academic learning in a 
        company that values innovation. My academic path has been complimented with 
        hands-on experience in customer service gained thanks to voluntary work at 
        charity shop. This experience strengthened my communication, problem-solving, 
        and teamwork skills. A software engineer placement allows me to supplement my 
        academic and interpersonal skills in an area that interests me. I am genuinely 
        interested in the back-end and software development role. 
      </motion.p>
    </>
  );
};
export default SectionWrapper(About, "about");
