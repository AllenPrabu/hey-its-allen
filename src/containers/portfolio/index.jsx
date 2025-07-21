import React, { useState } from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import projectOne from "../../assets/projects/project1.jpg";
import projectTwo from "../../assets/projects/project2.jpg";
import projectThree from "../../assets/projects/project3.jpg";
import projectFour from "../../assets/projects/project4.jpg";
import projectFive from "../../assets/projects/project5.jpg";
import projectSix from "../../assets/projects/project6.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: projectOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: projectTwo,
    link: "",
  },
  {
    id: 2,
    name: "Supplier Design",
    image: projectThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: projectFour,
    link: "",
  },
  {
    id: 3,
    name: "Shopping Cart Design",
    image: projectFive,
    link: "",
  },
  {
    id: 3,
    name: "Banking App UI",
    image: projectSix,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link || "#"} target="_blank" rel="noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
