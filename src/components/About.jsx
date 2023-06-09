import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"/>
          <h3 className="skill-cards text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a skilled full stack software developer with experience using frontend and backend technologies, and expertise in frameworks like React, Node.js, and Ruby on Rails. Proficient in developing and deploying software applications, collaborating with cross-functional teams to deliver projects on time by utilizing my strong communication and problem-solving skills.
      I'm a quick learner and collaborate closely with clients or teams to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about");