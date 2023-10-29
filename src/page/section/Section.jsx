import React from "react";
import img1 from "../../public/assets/image.png";
import img2 from "../../public/assets/img1.png";
import img3 from "../../public/assets/img2.png";
import img4 from "../../public/assets/img3.png";
import img5 from "../../public/assets/img4.png";
import img6 from "../../public/assets/img5.png";
import "./Section.scss";

const Section = () => {
  return (
    <div>
      <ul className="section-6-image">
        <li>
          <img src={img1} />
          <p>Top</p>
        </li>
        <li>
          <img src={img2} />
          <p>T-Shirts</p>
        </li>
        <li>
          <img src={img3} />
          <p>Caps</p>
        </li>
        <li>
          <img src={img4} />
          <p>Sandals</p>
        </li>
        <li>
          <img src={img5} />
          <p>Jackets</p>
        </li>
        <li>
          <img src={img6} />
          <p>Coats</p>
        </li>
      </ul>
    </div>
  );
};

export default Section;
