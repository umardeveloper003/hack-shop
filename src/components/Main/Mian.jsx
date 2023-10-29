import React, { useState } from "react";
import "./Main.scss";

const Main = () => {
  // const settings = {
  //   dots: true, // Показывать точки для навигации
  //   infinite: true, // Бесконечная прокрутка
  //   speed: 500, // Скорость анимации
  //   slidesToShow: 1, // Количество отображаемых слайдов
  //   slidesToScroll: 1, // Количество слайдов, которые перелистываются
  // };
  const images = [
    "/public/assets/bgimage.png",
    "https://lostpix.com/img/2022-10/12/p8eup8jfk1tcmvi1ajb4wsreo.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="mains">
      <div className="line_main">
        <div className="tit_wrap">
          <img src="/hackaton/public/assets/aroow_left.svg" alt="" />
          <h2>Up to 70% Off.</h2>
          <h1>Shop our latest sale styles</h1>
          <img src="/hackaton/public/assets/arrow_right.svg" alt="" />
        </div>
      </div>
        <img className="img-4" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button className="aroowL" onClick={prevSlide}>Left</button>
          <button className="aroowR" onClick={nextSlide}>Rigt</button>
      <div className="container">
        <div className="titles_mains">
          <p>New collection</p>
          <h1>Menswear 2020</h1>
          <div className="btns">
            <button className="btn1" >Shop sale</button>
            <button className="btn2">Shop the menswear</button>
          </div>
          <div className="imgBlock">
            <div className="box">
              <img src="/public/assets/image (2).png" alt="" />
              <h1>Women’s</h1>
            </div>
            <div className="box">
              <img src="/public/assets/image (3).png" alt="" />
              <h1>Men’s</h1>
            </div>
            <div className="box">
              <img src="/public/assets/image (4).png" alt="" />
              <h1>Kids’</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
