import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ModalBox.css";

const ModalBox = ({ modalUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");

  const openModal = () => {
    setUrl(modalUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setUrl("");
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 1.5,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 1.9,
      },
    },
  };

  return (
    <>
      <button
        className="modalBtn"
        onClick={() => openModal("https://areaagency.pl/")}
      >
        Open Modal
      </button>
      {isOpen && (
        <motion.div
          className="modal"
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   exit={{ opacity: 0 }}
          //   transition={{ duration: 1.5 }}
          variants={dropIn}
          initial="hidden"
          animate="visible"
        >
          <div className="modal-content">
            <div class="close-container" onClick={closeModal}>
              <div class="leftright"></div>
              <div class="rightleft"></div>
              <label class="close">close</label>
            </div>
            <iframe src={url} title="Modal Content" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModalBox;
