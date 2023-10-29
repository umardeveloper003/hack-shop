import React, { useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";
import "../scss/_woman.scss";
import Accordion from "./accordion/Accordion";
import './Dropdown.scss'

const Woman = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Опция 1", "Опция 2", "Опция 3"];

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="woman">
      <div className="container">
        <div className="woman-block">
          <Sidebar />
          <div className="woman-content">
            <div className="woman-sort">
              <div className="sort-button">
                <h3>Sort by</h3>
                <div
                  className="dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="dropdown-toggle">
                    popularity
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1377 5.52876C13.3981 5.78911 13.3981 6.21122 13.1377 6.47157L8.47108 11.1382C8.21073 11.3986 7.78862 11.3986 7.52827 11.1382L2.8616 6.47157C2.60125 6.21122 2.60125 5.78911 2.8616 5.52876C3.12195 5.26841 3.54406 5.26841 3.80441 5.52876L7.99967 9.72402L12.1949 5.52876C12.4553 5.26841 12.8774 5.26841 13.1377 5.52876Z"
                        fill="#424551"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      {options.map((option, index) => (
                        <li key={index} className="dropdown-item">
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Accordion />
      </div>
    </div>
  );
};

export default Woman;
