import React from "react";
import "./CArd.scss";

const Card = () => {
  return (
    <div>
      <div
        className="card-tovar"
        style={{
          backgroundImage: `url(https://musiccitymusicmag.com/wp-content/uploads/2021/04/image-1-285x320.jpeg)`,
          width: "285px",
          height: "320px",
        }}
      >
        <span style={{ marginLeft: "20px" }}>50$</span>
        <img
          style={{ width: "100px", marginLeft: "120px", marginTop: "10px" }}
          src="https://www.pngall.com/wp-content/uploads/4/5-Star-PNG.png"
        />
        <img
          src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"
          style={{ width: "25px", marginLeft: "240px", marginTop: "240px" }}
        />
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
      <div>50 $ !!!</div>
    </div>
  );
};

export default Card;
