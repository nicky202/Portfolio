/* eslint-disable react/prop-types */
import "./Card.scss";

import { useState } from "react";
import Modal from "../Modal/Modal";
import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

const Card = ({ img, title, link, techno, web }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <div className="cardProject">
        <div className="cardImage">
          <img src={img[0]} alt="photo" />
          <div className="tooltip flex">
            {techno.map((techno, index) => (
              <p key={index}>{techno}</p>
            ))}
          </div>
          <div className="fond" onClick={handleOpenModal}></div>
        </div>
        <div className="cardContent flex">
          <h2>{title}</h2>
          <p className="link flex">
            <FaGithub />
            <span>Github:</span>
            <a href={link}>{title}</a>
          </p>
          <p className="link flex">
            <FaEarthAsia />
            <span>Website:</span>
            <a href={web}>{title}.com</a>
          </p>
        </div>
        {openModal && <Modal close={handleOpenModal} data={img} />}
      </div>
    </div>
  );
};

export default Card;
