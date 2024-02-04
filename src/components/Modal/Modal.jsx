/* eslint-disable react/prop-types */
// import React from "react";
import { useState } from "react";
import "./Modal.scss";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Modal = ({ close, data }) => {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    if (index === 1) {
      document.querySelector(".image").style.left = "0";
      setIndex(0);
    } else if (index === 2) {
      document.querySelector(".image").style.left = "-50vw";
      setIndex(1);
    }
  };
  const handleNext = () => {
    if (index === 0) {
      document.querySelector(".image").style.left = "-50vw";
      setIndex(1);
    } else if (index === 1 && data.length > 2) {
      document.querySelector(".image").style.left = "-100vw";
      setIndex(2);
    }
  };

  return (
    <div className="containerModal">
      <div className="fond" onClick={close}></div>
      <div className="modal">
        <div className="image">
          {data.map((img, index) => (
            <img src={img} alt="image" key={index} />
          ))}
        </div>
        <p className="prev" onClick={handlePrev}>
          <FaArrowLeft />
        </p>
        <p className="next" onClick={handleNext}>
          <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Modal;
