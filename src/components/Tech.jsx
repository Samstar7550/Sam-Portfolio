import { SectionWrapper } from "../hoc";
import { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const BallCanvas = ({ index, icon, name }) => {
  return (
    <Tilt className={"xs:w-[130px] w-full"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-2 px-2 min-h-[130px] flex justify-evenly items-center gap-1 flex-col"
        >
          <div className="w-16 h-16 bg-white rounded-lg">
            <img
              src={urlFor(icon).url()}
              alt={name}
              className="w-full p-1 h-full object-contain"
            />
          </div>

          <h3 className="text-white text-[16px] font-medium text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'technologies']";

    client.fetch(query).then((data) => setTechnologies(data));
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know so for</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap mt-12 justify-center gap-20 ">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas key={technology.title} index={index} {...technology} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
