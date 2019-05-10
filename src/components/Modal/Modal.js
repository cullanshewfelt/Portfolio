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
      // autoplay: true,
      // autoplaySpeed: 2000,
      // centerMode: true,
      dots: true,
      touchMove: true
    };


  // console.log(20, selectedProject);

  const ModalDescription = () => (
    <div className='project-description'>
      <br/>
      {selectedProject.description.split('. ').map((desc, x) => (
        <li key={x}>
          {desc.trim()}
          <br/>
          <br/>
        </li>
      ))}
    </div>
  )


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
          style={{float: 'right'}}
        >X
        </button>
        <h3 className='title modal-title' style={{textAlign: 'center'}}>{selectedProject.title}</h3>
        <hr/>
        <div className='slider-container'>
          <Slider {...settings}>
            {selectedProject.images && selectedProject.images.map((image, x) => (
              <div key={x} className='modal-image'>
                <img src={image}/>
              </div>
            ))}
            <ModalDescription/>
          </Slider>
        </div>
        {/* <div>{selectedProject.description}</div> */}
      </ReactModal>
    </div>
  )
}

export default Modal;
