import React from "react";
import { motion } from "framer-motion";
import TextType from "../../containers/home/TextType"; // Assuming path
import { skillsData } from "./utils";
import "./styles.scss";

const pageVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

// Helper component to render the ASCII-style progress bar
const AsciiBar = ({ percentage }) => {
  const totalChars = 20; // Total length of the bar
  const filledChars = Math.round((percentage / 100) * totalChars);
  const emptyChars = totalChars - filledChars;

  const bar = '█'.repeat(filledChars) + '░'.repeat(emptyChars);
  return <span className="skill-item__bar">[{bar}]</span>;
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="skills__content">
        <TextType
          text="Skills Analysis"
          typingSpeed={75}
          className="skills__content__header"
          hideCursorAfterTyping={true}
        />

        {skillsData.map((item, i) => (
          <div className="skill-category" key={i}>
            <h2 className="skill-category__title">## {item.label}</h2>
            <div className="skill-category__list">
              {item.data.map((skillItem, j) => (
                <div className="skill-item" key={j}>
                  <span className="skill-item__name">{skillItem.skillName}</span>
                  <AsciiBar percentage={skillItem.percentage} />
                  <span className="skill-item__percentage">{skillItem.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
