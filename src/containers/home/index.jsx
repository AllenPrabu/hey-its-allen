import React from "react";
import { useNavigate } from 'react-router-dom';
// import { Animate } from 'react-simple-animate'
import './styles.scss';
import TextType from './TextType';

const Home = () => {

    const navigate = useNavigate();
    console.log(navigate);

    return (
        <section id='home' className="home">
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
            
        </section>

    )
}
console.log("Home rendered");
export default Home;