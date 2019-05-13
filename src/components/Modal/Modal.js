import React, {Component, useState} from 'react';

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
      // this customPaging works but there is no image to description component so nothing displays for it AND the user won't know where to click
      // customPaging: (i) => <img src={selectedProject.images[i]}/>,
      dots: true,
      swipeToSlide: true,
      touchMove: true
    };

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
      {selectedProject.github &&
        <strong><u><a target='blank' href={selectedProject.github}>View Code On Github</a></u></strong>
      }
      {selectedProject.link &&
        <strong><u><a target='blank' href={selectedProject.link}>View Website</a></u></strong>
      }
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
        <hr className='modal-break'/>
        <div className='slider-container'>
          <Slider {...settings}>
            {selectedProject.images && selectedProject.images.map((image, x) => (
              <div key={x} className='modal-image'>
                <img src={image} title='Scroll Through Images For Project Details'/>
              </div>
            ))}
            <ModalDescription/>
          </Slider>
        </div>
        <div style={{textAlign: 'center'}}>Scroll Through The Images To Get Details Of This Project</div>

      </ReactModal>
    </div>
  )
}

export default Modal;
