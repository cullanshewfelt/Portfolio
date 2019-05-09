import React, {Component, useState} from 'react';
import {connect} from 'react-redux';

import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Modal = (props) => {
  let { handleModal, isModalOpen, selectedProject } = props;

  const closeModal = () => {
    isModalOpen && handleModal();
  }

  const settings = {
      centerMode: true,
      dots: true,
      touchMove: true
    };


  // console.log(20, selectedProject);

  ReactModal.setAppElement('#root')
  return (
    <div>
      <ReactModal
        className='portfolio-detail-modal'
        contentLabel='Portfolio Detail'
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <button
          onClick={closeModal}
          style={{float: 'left'}}
        >X
        </button>
        <h3 className='title' style={{textAlign: 'center'}}>{selectedProject.title}</h3>
        <hr/>
        <Slider {...settings}>
          {selectedProject.images && selectedProject.images.map((image, x) => {
              return(
                <div key={x} className='modal-image'>
                  <img src={image}></img>
                </div>
              )
          })}
        </Slider>
        <div>{selectedProject.description}</div>
      </ReactModal>
    </div>
  )
}

export default Modal;
