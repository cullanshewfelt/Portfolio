import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';

const Modal = (props) => {
  let { handleModal, isModalOpen, selectedProject } = props;

  const closeModal = () => {
    isModalOpen && handleModal();
  }

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

      </ReactModal>
    </div>
  )
}

export default Modal;
