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
  // const disableScroll = () => { document.body.style.overflow = 'hidden; position: fixed; top: 0; right: 0; bottom: 0; left: 0;' }

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
      {selectedProject.description.split('. ').map((desc, x) => (
        <div
          className='justified-content'
          key={x}>
          {desc.trim()}
          <br/>
          <br/>
        </div>
      ))}
      <br/>
      {selectedProject.link &&
        <strong><u><a target='blank' href={selectedProject.link} style={{float:'left'}}>View Website</a></u></strong>
      }
      {selectedProject.github &&
        <strong><u><a target='blank' href={selectedProject.github} style={{float:'right'}}>View Code On Github</a></u></strong>
      }
    </div>
  )

  ReactModal.setAppElement('#root')
  return (
    <div>
      <ReactModal

        className='portfolio-detail-modal'
        contentLabel='Portfolio Detail'
        htmlOpenClassName='ReactModal__Html--open'
        isOpen={isModalOpen}
        // onAfterOpen={disableScroll}
        onRequestClose={closeModal}
        shouldFocusAfterRender={false}
      >
        <button
          onClick={closeModal}
          style={{float: 'right'}}
        >X
        </button>
        <h3 className='title modal-title'>{selectedProject.title}</h3>
        <hr className='modal-break'/>
        <br/>
        {/* <div className='mobile-modal-spacing'>
          <br/>
        </div> */}
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
        <div style={{textAlign: 'center'}}>Details Of My Contributions Are On The Last Slide</div>
      </ReactModal>
    </div>
  )
}

export default Modal;
