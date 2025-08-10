import React from "react";
import { motion } from "framer-motion";
import TextType from "../../containers/home/TextType"; // Assuming path to your TextType component
import "./styles.scss";

// Define the animation variants for the page transition
const pageVariants = {
    initial: {
        opacity: 0,
        y: "100vh"
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: "-100vh"
    }
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="contact__content">
        <TextType
          text="Contact Me"
          typingSpeed={75}
          className="contact__content__header"
          hideCursorAfterTyping={true}
        />
        
        <div className="contact__content__form">
          <div className="contact__content__form__control">
            <label htmlFor="name">Name:</label>
            <input
              required
              name="name"
              id="name"
              type="text"
            />
          </div>
          <div className="contact__content__form__control">
            <label htmlFor="email">Email:</label>
            <input
              required
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="contact__content__form__control">
            <label htmlFor="description">Message:</label>
            <textarea
              required
              name="description"
              id="description"
              rows="5"
            />
          </div>
          <button className="submit-button">
            Send Message &gt;
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
