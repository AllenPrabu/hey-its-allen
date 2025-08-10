import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import './styles.scss';

const navData = [
    { label: "Home", to: '/' },
    { label: "About", to: '/about' },
    { label: "Portfolio", to: '/portfolio' },
    { label: "Resume", to: '/resume' },
    { label: "Skills", to: '/skills' },
    { label: "Contact", to: '/contact' }
];

const basePath = "C:\\Users\\allen\\Portfolio";

const Navbar = ({ onNavigate }) => {
    const [lines, setLines] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const terminalEndRef = useRef(null);
    const location = useLocation();

    const addLine = (text) => {
        setLines(prev => [...prev, text]);
    };

    useEffect(() => {
        const initializeTerminal = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            addLine(`PS ${basePath}\\..> cd Portfolio`);
            await new Promise(resolve => setTimeout(resolve, 300));
            addLine(`PS ${basePath}>`);
            await new Promise(resolve => setTimeout(resolve, 200));
            setIsReady(true);
        };

        initializeTerminal();
    }, []);

    const handleNavClick = async (label, to) => {
        if (isAnimating || !isReady) return;

        setIsAnimating(true);
        setLines([]);

        const executingLines = [
            `PS ${basePath}${location.pathname.replace(/\//g, '\\')}> execute ./${label.toLowerCase()}`,
            `Executing command...`,
            `Initializing virtual DOM...`,
            `Compiling modules...`,
            `Rendering component...`,
            `Success.`
        ];

        for (const line of executingLines) {
            addLine(line);
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        await new Promise(resolve => setTimeout(resolve, 200));
        onNavigate(to);
        await new Promise(resolve => setTimeout(resolve, 400));
        
        setLines([`PS ${basePath}${to.replace(/\//g, '\\')}>`]);
        setIsAnimating(false);
    };
    
    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [lines]);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* NEW: Added the extra tabs */}
                <div className="tab-bar">
                    <span>PROBLEMS</span>
                    <span>OUTPUT</span>
                    <span>DEBUG CONSOLE</span>
                    <span className="active-tab">TERMINAL</span>
                    <span>PORTS</span>
                    <span>GITLENS</span>
                    <span>ESP-IDF</span>
                </div>

                <div className="terminal-output">
                    {lines.map((line, index) => (
                        <div key={index} className="terminal-line">
                            <span>{line}</span>
                        </div>
                    ))}

                    {isReady && !isAnimating && (
                        <>
                            {navData.map((item, key) => (
                                <div key={key} className="terminal-line">
                                    <button
                                        onClick={() => handleNavClick(item.label, item.to)}
                                        className="terminal-link"
                                    >
                                        <span className="terminal-prefix">$</span>
                                        <span>{item.label}</span>
                                    </button>
                                </div>
                            ))}
                            <div className="terminal-line">
                                <span>PS {basePath}{location.pathname.replace(/\//g, '\\')}</span>
                                <span className="blinking-cursor">█</span>
                            </div>
                        </>
                    )}
                    <div ref={terminalEndRef} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
