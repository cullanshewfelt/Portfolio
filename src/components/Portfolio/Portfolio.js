import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';
import DLMusicHomepage from './images/screenshots/DL_Music_Homepage_1.png';
import DLMusicLibrary from './images/screenshots/DL_Search_1.png';

const Portfolio = () => {
  document.title = 'Cullan Shewfelt | Portfolio';
  const [isModalOpen, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModalOpen);
  }
  console.log(16, isModalOpen);

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')
  return (
    <div>
      <div className='columns has-navbar-fixed-top'>
        <div className='column'></div>
        <div className='column is-four-fifths'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-6'>
              <div className='tile is-parent is-vertical'>
                <article className='tile is-child notification is-primary'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>Portfolio</h4>
                    <hr/>
                  </div>
                </article>
                <article className='tile is-child notification is-primary'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>DL-Music</h4>
                    <hr/>
                    <img
                      src={DLMusicLibrary}
                      alt='DL Music Homepage'
                      onClick={()=>{handleModal()}}
                    />
                  </div>
                </article>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-primary'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>Continued...</h4>
                    <hr/>
                    <p className='subtitle'>Bottom Tile</p>
                  </div>
                </article>
              </div>
            </div>
            <div className='tile is-vertical is-6'>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-primary'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>DL-Music</h4>
                    <hr/>
                    <img src={DLMusicHomepage} alt='DL Music Homepage'/>
                  </div>
                </article>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-primary'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>Skills, Tools & Experience</h4>
                    <hr/>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className='column'></div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={()=>{isModalOpen && handleModal()}}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2>Hello</h2>
        <button onClick={()=>{isModalOpen && handleModal()}}>close</button>
        <div>I am a modal</div>
        
      </Modal>
    </div>

  )
}

export default connect()(Portfolio);
