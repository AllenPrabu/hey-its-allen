import React, { useState } from "react";
import { motion } from "framer-motion";
import TextType from "../../containers/home/TextType"; // Assuming path
import "./styles.scss";

const portfolioData = [
  { id: 2, name: "Ecommerce-Project.zip", link: "" },
  { id: 3, name: "Notes-App-UI.fig", link: "" },
  { id: 2, name: "Supplier-Dashboard.git", link: "" },
  { id: 2, name: "Todo-App.exe", link: "" },
  { id: 3, name: "Shopping-Cart-Design.psd", link: "" },
  { id: 3, name: "Banking-App-Concept.sketch", link: "" },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Design" },
];

const pageVariants = {
  initial: { opacity: 0, y: "100vh" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-100vh" },
};

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <motion.section
      id="portfolio"
      className="portfolio"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="portfolio__content">
        <TextType
          text="My Portfolio"
          typingSpeed={75}
          className="portfolio__content__header"
          hideCursorAfterTyping={true}
        />

        <div className="portfolio__content__filter">
          <span className="filter-prompt">Filter by:</span>
          {filterData.map((item) => (
            <button
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="portfolio__content__listing">
          <p>C:\Users\allen\Portfolio&gt; ls -l</p>
          <p>Total {filteredItems.length}</p>
          {filteredItems.map((item, index) => (
            <div className="project-item" key={index}>
              <span className="permissions">-rwxr-xr-x</span>
              <span className="owner">allen</span>
              <span className="group">users</span>
              <span className="size">4.8K</span>
              <span className="date">Aug 10</span>
              <a href={item.link || "#"} target="_blank" rel="noreferrer" className="filename">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
