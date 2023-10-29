import React, { useState } from "react";
import './Accordion.scss'; 

function Accordion() {
  const [sections, setSections] = useState([
    {
      id: 1,
      buttonText: "Clothes",
      content: "Content 1 ",
      isOpen: false,
    },
    {
      id: 2,
      buttonText: "Size",
      content: "Content 2",
      isOpen: false,
    },
    {
      id: 3,
      buttonText: "Color",
      content: "Content 3",
      isOpen: false,
    },
    {
      id: 4,
      buttonText: "Material",
      content: "Content 4",
      isOpen: false,
    },
    {
      id: 5,
      buttonText: "Brand",
      content: "Content 5",
      isOpen: false,
    },
    {
      id: 6,
      buttonText: "Other",
      content: "Content 6",
      isOpen: false,
    },
  ]);

  const toggleSection = (id) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  return (
    <div className="accordion">
      {sections.map((section) => (
        <div
          className={`accordion-section ${section.isOpen ? "open" : ""}`}
          key={section.id}
        >
          <button
            style={{ width: '70px', background: 'none ' }}
            className="accordion-header"
          >
            {section.buttonText}
          </button>
          <img
            className="icon"
            onClick={() => toggleSection(section.id)}
            style={{ width: '20px' }}
            src={
              section.isOpen
                ? "https://www.iconpacks.net/icons/2/free-minus-icon-3108-thumb.png"
                : "https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png"
            }
            alt={section.isOpen ? "Minus" : "Plus"}
          />
          <div className="accordion-content">
            {section.isOpen && (
              <>
                {Array(6).fill().map((_, index) => (
                  <div key={index}>
                    <input type="checkbox" id={`checkbox${section.id}_${index}`} />
                    <span>Content {index + 1}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
