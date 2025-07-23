import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    { label: "Home", to: '/' },
    { label: "About", to: '/about' },
    { label: "Portfolio", to: '/portfolio' },
    { label: "Resume", to: '/resume' },
    { label: "Skills", to: '/skills' },
    { label: "Contact", to: '/contact' }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    {/* Logo on top-right */}
                    <div className="navbar__container__logo">
                        <FaReact size={30} />
                    </div>

                    {/* Top Tab Bar */}
                    <div className="tab-bar">
                        <span>PROBLEMS</span>
                        <span>OUTPUT</span>
                        <span>DEBUG CONSOLE</span>
                        <span className="active-tab">TERMINAL</span>
                        <span>PORTS</span>
                        <span>GITLENS</span>
                        <span>ESP-IDF</span>
                    </div>

                    {/* Terminal line: executed command */}
                    <div className="terminal-line">
                        <span className="terminal-prefix">PS </span>
                        <span className="terminal-command">C:\Users\allen\OneDrive\Desktop\College\Projects\Portfolio_website: ls</span>
                    </div>

                    {/* Terminal "directory" lines - links */}
                    <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                        {data.map((item, key) => (
                            <li key={key} className="terminal-line">
                                <Link
                                    to={item.to}
                                    onClick={() => setToggleIcon(false)}
                                    className="terminal-link full-line"
                                >
                                    <span className="terminal-prefix">$</span>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Final blinking prompt */}
                    <div className="terminal-line">
                        <span className="terminal-prefix">PS C:\Users\allen\OneDrive\Desktop\College\Projects\Portfolio_website:</span>
                        <span className="blinking-cursor">█</span>
                    </div>

                    {/* Toggle button */}
                    <div className="nav-icon" onClick={handleToggleIcon}>
                        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
