import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';

import DLMusicHomepage from './images/screenshots/DL_Music_Homepage_1.png';
import DLMusicLibrary from './images/screenshots/DL_Search_1.png';
import MLBAnalysisMain from './images/screenshots/MLB_Analysis_Main.png';
import MLBAnalysisRoster from './images/screenshots/MLB_Analysis_Roster.png';


const Portfolio = () => {
  document.title = 'Cullan Shewfelt | Portfolio';
  const [isModalOpen, setModal] = useState(false);
  const [selectedProject, setProject] = useState({});

  const handleModal = (project) => {
    !isModalOpen && setProject(project);
    setModal(!isModalOpen);
  }

  const dlmusic = {
    description: 'PHP, Javascript',
    images: [DLMusicLibrary, DLMusicHomepage],
    link: 'www.dl-music.com',
    title: 'DL Music'
  }

  const mlbAnalysis = {
    description: 'mlbAnalysis is a command line interface application that retrieves Major League Baseball data and statistics. \
                  My goal with mlbAnalysis was to create an app so I could track baseball stats for fantasy purposes. \
                  The app was built with Javascript in node.js. \
                  The user interface is designed with inquirer.js.',
    images: [MLBAnalysisMain, MLBAnalysisRoster],
    link: 'www.dl-music.com',
    title: 'MLB Analysis'
  }


  return (
    <div>
      <Modal
        handleModal={handleModal}
        isModalOpen={isModalOpen}
        selectedProject={selectedProject}
      />
      <div className={isModalOpen ? 'columns has-navbar-fixed-top' : 'columns has-navbar-fixed-top modal-open'}>
        <div className='column'></div>
        <div className='column is-four-fifths'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-6'>
              <div className='tile is-parent is-vertical'>
                <article className='tile is-child notification is-primary has-text-centered'>
                  <div className='content'>
                    <h4 className='title'>Portfolio</h4>
                    <hr/>
                    Click on an image to see details about that project.
                  </div>
                </article>
                <article
                  className='tile is-child notification is-primary portfolio-project'
                  onClick={() => {handleModal(mlbAnalysis)}}
                >
                  <div className='content'>
                    <h4 className='title has-text-centered'>{mlbAnalysis.title}</h4>
                    <hr/>
                    <img
                      alt='DL Music Homepage'
                      src={mlbAnalysis.images[0]}
                      title='Click To View Details'
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
                <article
                  className='tile is-child notification is-primary portfolio-project'
                  onClick={() => {handleModal(dlmusic)}}
                >
                  <div className='content'>
                    <h4 className='title has-text-centered'>{dlmusic.title}</h4>
                    <hr/>
                    <img
                      alt='DL Music Homepage'
                      src={dlmusic.images[0]}
                      title='Click To View Details'
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
