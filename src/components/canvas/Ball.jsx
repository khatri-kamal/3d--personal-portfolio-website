import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../../constants";
import { fadeIn } from "../../utils/motion";

const TechnologyCard = ({ name, icon, styles }) => {
  return (
    <motion.div variants={fadeIn("up", "sprint")}>
      <div
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${styles}`}
      >
        <img src={icon} alt={name} className="w-20 mx-auto" />
        <p className="mt-4">{name}</p>
      </div>
    </motion.div>
  );
};

const Software = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ name, icon, styles }, id) => (
            <TechnologyCard key={id} name={name} icon={icon} styles={styles} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Software;
