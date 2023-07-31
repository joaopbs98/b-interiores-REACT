import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function ImageSlider() {
  const [currImg, setCurrImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1635321349302-f91724057317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  ];

  const prevImg = () =>
    setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);

  const nextImg = () =>
    setCurrImg(currImg >= images.length - 1 ? 0 : currImg + 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrImg((prevImg) => (prevImg + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="ImageSlider">
      <div className="img-container">
        <img
          src={images[currImg]}
          className="img modal-img"
          alt="girl"
          onClick={() => setIsModalOpen(true)}
        />

        <button type="button" onClick={prevImg} className="btn btn--prev">
          {"<"}
        </button>
        <button type="button" onClick={nextImg} className="btn btn--next">
          {">"}
        </button>
      </div>

      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <div className="img-container">
              <span
                className="close-icon"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </span>
              <img
                src={images[currImg]}
                className="img modal-img"
                alt="girl"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />

              <button type="button" onClick={prevImg} className="btn btn--prev">
                {"<"}
              </button>
              <button type="button" onClick={nextImg} className="btn btn--next">
                {">"}
              </button>
            </div>

            <div>
              {images.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  className={`img--small ${i === currImg && "active"}`}
                  alt="girl"
                  onClick={() => setCurrImg(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
