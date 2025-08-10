import React from "react";
import { motion } from "framer-motion";
import TextType from "../../containers/home/TextType"; // Assuming path to your TextType component
import './styles.scss';

const pageVariants = {
    initial: { opacity: 0, y: "100vh" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100vh" }
};

const personalDetails = [
    { label: "Name", value: "P Allen Thiagaraj" },
    { label: "Age", value: "27" },
    { label: "Address", value: "India" },
    { label: "Email", value: "allenthiagarajprabu@gmail.com" },
    { label: "Contact No", value: "+91 6361196329" },
];

const jobSummary = "BE in ECE 3rd Year student, Chair of IEEE RAS BMSIT.";

const About = () => {
    return (
        <motion.section
            id='about'
            className="about"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
        >
            <div className="about__content">
                <TextType
                    text="About Me"
                    typingSpeed={75}
                    className="about__content__header"
                    hideCursorAfterTyping={true}
                />
                <div className="about__content__summary">
                    {jobSummary}
                </div>

                <TextType
                    text="Personal Info"
                    typingSpeed={75}
                    initialDelay={2000} // Delay before typing the next header
                    className="about__content__header"
                    hideCursorAfterTyping={true}
                />
                <div className="about__content__details">
                    {personalDetails.map((item, i) => (
                        <div className="detail-item" key={i}>
                            <span className="detail-item__label">{item.label}:</span>
                            <span className="detail-item__value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default About;
