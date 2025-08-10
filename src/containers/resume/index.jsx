import React from "react";
import { motion } from "framer-motion";
import TextType from "../../containers/home/TextType"; // Assuming path
import { data } from "./utils";
import "./styles.scss";

const pageVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="resume"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="resume__content">
        <TextType
          text="My Resume"
          typingSpeed={75}
          className="resume__content__header"
          hideCursorAfterTyping={true}
        />

        <div className="resume__content__section">
          <h2 className="section-title">## Experience</h2>
          {data.experience.map((item, i) => (
            <div className="resume-item" key={i}>
              <h3 className="resume-item__title">{item.title}</h3>
              <p className="resume-item__subtitle">{item.subTitle}</p>
              <p className="resume-item__description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="resume__content__section">
          <h2 className="section-title">## Education</h2>
          {data.education.map((item, i) => (
            <div className="resume-item" key={i}>
              <h3 className="resume-item__title">{item.title}</h3>
              <p className="resume-item__subtitle">{item.subTitle}</p>
              <p className="resume-item__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
