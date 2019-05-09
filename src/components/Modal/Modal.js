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
      dots: true
    };


  console.log(20, selectedProject);

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
        <div>I am a modal</div>
        <Slider {...settings}>
          
          {
            selectedProject.images && selectedProject.images.map((image) => {
              <div>
                <img src={image}></img>
              </div>
            })
          }
        </Slider>
      </ReactModal>
    </div>
  )
}

export default Modal;
