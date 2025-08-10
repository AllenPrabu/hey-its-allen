import React from "react";
import { motion } from "framer-motion";
import './styles.scss';
import TextType from './TextType';

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

const Home = () => {
    return (
        <motion.section
            id='home'
            className="home"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
        >
            <div className="home__text-wrapper">
                <div>
                    <TextType
                        text="Welcome"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="█"
                        className="big-typing-text"
                        hideCursorAfterTyping={true}
                    />
                </div>
                <div>
                    <TextType
                        text="I am Allen"
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="█"
                        className="big-typing-text"
                        initialDelay={1000}
                        hideCursorAfterTyping={true}
                    />
                </div>
                <div>
                    <TextType
                        text="How can I help you?"
                        typingSpeed={75}
                        pauseDuration={700}
                        showCursor={true}
                        cursorCharacter="█"
                        className="big-typing-text"
                        initialDelay={3000}
                    />
                </div>
            </div>
        </motion.section>
    )
}

export default Home;
