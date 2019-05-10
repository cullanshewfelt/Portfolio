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
    description: 'I\'ve been the sole developer and IT specialist at DL Music since November 2018. \
                  DL Music is a publishing company that licenses a selective catalog of music to film and television shows. \
                  The catalog features over 50,000 tracks from composers all over the world. \
                  I inhereted a messy PHP / SQL codebase over 10 years old, and have been working to modernize it\'s UI and enhance it\'s features. \
                  In addition to the makeover, I\'ve debugged lots of code, added notes for clarity to future developers, reogranized the file structure for less confusion, and got rid of unused code. \
                  I\'ve increased the search engine performance by creating booleans to help filter through the SQL database. \
                  Managed our catalog\'s metadata, and created scripts to export it into a variety of formats to deliver to studios, producers, editors, music supervisors etc.',
    images: [DLMusicLibrary, DLMusicHomepage],
    link: 'http://www.dl-music.com',
    title: 'DL Music'
  }

  const dlmusicRework = {
    description: 'This is my attempt ro redesign the DL Music website but in React. \
                  My goal was create an application using React and Redux to limit the overall nu mber of server requests, in favor of a longer initial loading time. \
                  I knew this had to be built using the existing SQL databases and data structures so both websites could be operational simultaneously.',
    github: 'https://github.com/cullanshewfelt/Metadata-Tagging-With-Redux',
    images: [DLMusicLibrary, DLMusicHomepage],
    link: '',
    title: 'DL Music (Reworked In React)'
  }

  const mlbAnalysis = {
    description: 'mlbAnalysis is a command line interface application that retrieves Major League Baseball data and statistics. \
                  My goal with mlbAnalysis was to create an app so I could track baseball stats for fantasy purposes. \
                  The app was built with Javascript in node.js. \
                  The user interface is designed with inquirer.js.',
    github: 'https://github.com/cullanshewfelt/MLBanalysis',
    images: [MLBAnalysisMain, MLBAnalysisRoster],
    link: '',
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
                  onClick={() => {handleModal(dlmusicRework)}}
                >
                  <div className='content'>
                    <h4 className='title has-text-centered'>{dlmusicRework.title}</h4>
                    <hr/>
                    <img
                      alt='DL Music Homepage'
                      src={dlmusicRework.images[0]}
                      title='Click To View Details'
                    />
                  </div>
                </article>
              </div>
              <div className='tile is-parent'>
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
              <div className='tile is-parent'>
                <article className='tile is-child notification is-primary has-text-centered'>
                  <div className='content'>
                    <h4 className='title'>Portfolio</h4>
                    <hr/>
                    Click on an image to see details about that project.
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
