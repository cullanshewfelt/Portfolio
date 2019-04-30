import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import Loader from '../SubComponents/Loader';
import Modal from '../Modal/Modal';
import {initializeData} from '../../actions/dataActions';
import DLMusicHomepage from './images/screenshots/DL_Music_Homepage_1.png';
import DLMusicLibrary from './images/screenshots/DL_Search_1.png';

const Portfolio = () => {
  document.title = 'Cullan Shewfelt | Portfolio';
  const [isModalOpen, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModalOpen);
  }

  return (
    <div>
      <Modal
        isModalOpen={isModalOpen}
        handleModal={handleModal}
      />
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
                      alt='DL Music Homepage'
                      onClick={handleModal}
                      src={DLMusicLibrary}
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
                    <img
                      alt='DL Music Homepage'
                      onClick={handleModal}
                      src={DLMusicHomepage}
                    />
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
    </div>

  )
}

export default connect()(Portfolio);
