import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div> 

      <motion.p
      variant={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]'
      >
        Computer science student with a passion for learning and 
        a strong foundation in programming principles. 
        Eager to apply theoretical knowledge and practical 
        skills in a challenging environment. 
        Dedicated to continuously expanding my understanding of cutting-edge technologies 
        and seeking opportunities to contribute to innovative projects. Committed to growth, 
        collaboration, and delivering high-quality solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services, index) => (
          <ServiceCard key ={services.title} 
          index = {index} {...services}/>
        ))}
      </div>
    </>
  );
};
export default SectionWrapper (About, "about")