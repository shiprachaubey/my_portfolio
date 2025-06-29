import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
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
          className='w-16 h-16 object-contain cursor-pointer '
           onClick={() => window.open(link, "_blank")}
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
     
        A skilled  Developer with expertise in JavaScript, TypeScript, and the MERN stack (MongoDB, Express.js, React, Node.js), along with proficiency in modern technologies like AWS, Docker, Kafka and Redis. I specialize in developing real-time applications, optimizing databases, and implementing robust RESTful APIs. With hands-on experience in high-traffic platforms and a strong foundation in cloud services and microservices architecture, I thrive in solving complex problems and enhancing system performance.
       </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
     
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
         
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
