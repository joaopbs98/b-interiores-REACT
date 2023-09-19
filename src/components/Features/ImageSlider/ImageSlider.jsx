import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function ImageSlider() {
  const [currImg, setCurrImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/CamaBI/Cama-BI.jpg",
    "/MesaTV-Belmonte/MesaTV-Belmonte (2).jpg",
    "/SofaNomada/SofaNomada (4).jpg",
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
        <Link to="/catalog">
          <img
            src={images[currImg]}
            className="img modal-img"
            alt="Móveis"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="hover-overlay">
            <span>Ver Catálogo</span>
          </div>
        </Link>
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
                alt="Móveis"
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
                  alt="Móveis"
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
