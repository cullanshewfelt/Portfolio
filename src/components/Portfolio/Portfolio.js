import React, {Component, useState, lazy, Suspense} from 'react';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';
const noScroll = require('no-scroll');
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


import CapitolHillCongressmanDetails from './images/screenshots/Capitol_Hill_Congressman_Details.png';
import CapitolHillCongressmanVotes from './images/screenshots/Capitol_Hill_Congressman_Votes.png';
import CapitolHillMain from './images/screenshots/Capitol_Hill_Main.png';
import CapitolHillMainPH from './images/screenshots/Capitol_Hill_Map_ph.png';
import CapitolHillMap from './images/screenshots/Capitol_Hill_Map.png';
import CapitolHillMapDetail from './images/screenshots/Capitol_Hill_Map_Detail.png';
import CapitolHillSenatorDetails from './images/screenshots/Capitol_Hill_Senator_Details.png';
import CapitolHillSenatorVotes from './images/screenshots/Capitol_Hill_Senator_Votes.png';

import DLMusicHomepage from './images/screenshots/DL_Music_Homepage_1.png';
import DLMusicLibrary from './images/screenshots/DL_Search.png';
import MetadataMain from './images/screenshots/Metadata_Main.png';
import MetadataKeyword from './images/screenshots/Metadata_Keyword_Search.png';
import MetadataModalInstruments from './images/screenshots/Metadata_Modal_Instruments.png';
import MLBAnalysisMain from './images/screenshots/MLB_Analysis_Main.png';
import MLBAnalysisRoster from './images/screenshots/MLB_Analysis_Roster.png';

import EmailSVG from '../Icons/EmailSVG';
import GithubSVG from '../Icons/GithubSVG';
import LinkedInSVG from '../Icons/LinkedInSVG';
import SoundcloudSVG from '../Icons/SoundcloudSVG';

const Portfolio = () => {
  document.title = 'Cullan Shewfelt | Portfolio';
  const [isModalOpen, setModal] = useState(false);
  const [selectedProject, setProject] = useState({});

  const defaultMainFill = '#000000';
  const defaultBackFill= '#4dcce6';

  const [isHovered, setHover] = useState('');
  const [mainFill, setMain] = useState(defaultMainFill);
  const [backFill, setBackground] = useState(defaultBackFill);

  const handleChange = () => {
    !!isHovered // switch main and back fills for hover effect
      ? setMain(defaultMainFill) & setBackground(defaultBackFill)
      : setMain(defaultBackFill) & setBackground(defaultMainFill)
  }

  const handleModal = (project) => {
    !isModalOpen && setProject(project);
    // isModalOpen ? noScroll.off() : noScroll.on();
    !isModalOpen ? disableBodyScroll(document.getElementsByClassName('#ReactModal__Body--open')) : clearAllBodyScrollLocks();
    setModal(!isModalOpen);
  }

  const capitolHill = {
    description: 'Capitol Hill is an application designed to easily connect people with their Senators and Congressional representatives. \
                  Users can search for their district\'s representatives, or state Senators, and shown that politician\'s legislative voting track record. \
                  Users can also search by a map, which has each Congressional district (mapped in GeoJSON data), and can find their representatives through this method. \
                  I conceptualized this app, delegating tasks to a team of four developers. \
                  I did most of the heavy lifting for this application, including scraping API data, creating the data structures in MongoDB, and designing the entire map component using leaflet.js.',
    github: 'https://github.com/Capitol-Hill/Capitol-Hill',
    images: [CapitolHillMap, CapitolHillSenatorDetails, CapitolHillMapDetail, CapitolHillCongressmanVotes],
    link: 'https://capitol-hill.herokuapp.com/',
    title: 'Capitol Hill'
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
    description: 'This is my attempt to redesign the DL Music website but in React. \
                  My goal was create an application using React and Redux to limit the overall number of server requests, in favor of a longer initial loading time. \
                  I knew this had to be built using the existing SQL databases and data structures so both websites could be operational simultaneously.',
    github: 'https://github.com/cullanshewfelt/Metadata-Tagging-With-Redux',
    images: [MetadataMain, MetadataKeyword, MetadataModalInstruments],
    link: 'https://react-metadata-beta.herokuapp.com/',
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
                  href="javascript:void(0)"
                  className='tile is-child notification is-primary portfolio-project'
                  onClick={(event) => {event.preventDefault() & handleModal(dlmusicRework)}}
                  tabIndex='0'
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
                  href="javascript:void(0)"
                  className='tile is-child notification is-primary portfolio-project'
                  onClick={(event) => {event.preventDefault() & handleModal(capitolHill)}}
                  tabIndex='0'
                >
                  <div className='content'>
                    <h4 className='title has-text-centered'>{capitolHill.title}</h4>
                    <hr/>

                    <img
                      alt='DL Music Homepage'
                      src={capitolHill.images[0]}
                      title='Click To View Details'
                    />

                  </div>
                </article>
              </div>
            </div>
            <div className='tile is-vertical is-6'>
              <div className='tile is-parent'>
                <article
                  href="javascript:void(0)"
                  className='tile is-child notification is-primary portfolio-project'
                  onClick={(event) => {event.preventDefault() & handleModal(dlmusic)}}
                  tabIndex='0'
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
                <article
                  href="javascript:void(0)"
                  className='tile is-child notification is-primary portfolio-project'
                  onClick={(event) => {event.preventDefault() & handleModal(mlbAnalysis)}}
                  tabIndex='0'
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
              <div className='tile is-parent portfolio-contact-tile'>
                <article className='tile is-child notification is-primary has-text-centered'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>Contact Me</h4>
                    <hr/>
                    <a
                      target='_blank'
                      href='https://github.com/cullanshewfelt'
                      title='Github Profile'
                      onMouseEnter={() => {setHover('github-icon-portfolio') & handleChange()}}
                      onMouseLeave={() => {setHover('') & handleChange()}}
                    >
                      <GithubSVG props={isHovered === 'github-icon-portfolio'
                        ? {className:'github-icon-portfolio social-icon', mainFill, backFill}
                        : {className:'github-icon-portfolio social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
                    </a>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/cullan-shewfelt'
                      title='LinkedIn Profile'
                      onMouseEnter={() => {setHover('linkedin-icon-portfolio') & handleChange()}}
                      onMouseLeave={() => {setHover('') & handleChange()}}
                    >
                      <LinkedInSVG props={isHovered === 'linkedin-icon-portfolio'
                        ? {className:'linkedin-icon-portfolio social-icon', mainFill, backFill}
                        : {className:'linkedin-icon-portfolio social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
                    </a>
                    <a
                      target='_blank'
                      href='mailto:cullan.shewfelt@gmail.com'
                      title='Email Me'
                      onMouseEnter={() => {setHover('email-icon-portfolio') & handleChange()}}
                      onMouseLeave={() => {setHover('') & handleChange()}}
                    >
                      <EmailSVG props={isHovered === 'email-icon-portfolio'
                        ? {className:'email-icon-portfolio social-icon', mainFill, backFill}
                        : {className:'email-icon-portfolio social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
                    </a>
                    <a
                      target='_blank'
                      href='https://www.soundcloud.com/cullan-shewfelt'
                      title='Soundcloud'
                      onMouseEnter={() => {setHover('soundcloud-icon-portfolio') & handleChange()}}
                      onMouseLeave={() => {setHover('') & handleChange()}}
                    >
                      <SoundcloudSVG props={isHovered === 'soundcloud-icon-portfolio'
                        ? {className:'soundcloud-icon-portfolio social-icon', mainFill, backFill}
                        : {className:'soundcloud-icon-portfolio social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}
                      />
                    </a>
                    <br/>
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

export default Portfolio;
