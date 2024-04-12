import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { urlFor, client } from "../client";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className={"xs:w-[250px] w-full"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={urlFor(icon).url()}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'services']";

    client.fetch(query).then((data) => setServices(data));
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        A highly motivated web developer and designer with excellent
        self-learning capabilities, a passion for development and a creative eye
        for design. Quick to adapt to new technologies and produce high- quality
        results. Aiming for excellence in every project, using innovative
        approaches and dedication to ensure outstanding results.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
