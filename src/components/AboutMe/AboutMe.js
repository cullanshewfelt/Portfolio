import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const AboutMe = () => {
  document.title = 'Cullan Shewfelt | Web Developer';
    return (
        <div className='columns is-flex has-navbar-fixed-top is-desktop is-vcentered'>
          <div className='column'></div>
          <div className='column is-four-fifths'>
            <div className='tile is-ancestor'>
              <div className='tile is-vertical is-6'>
                <div className='tile is-parent is-vertical'>
                  <article className='tile is-child notification is-primary'>
                    <p className='title'></p>
                    <p className='subtitle'>Hello World! My name is Cullan Shewfelt and I am a web developer from Los Angeles. </p>
                  </article>
                  <article className='tile is-child notification is-primary'>
                    <p className='title'>...tiles</p>
                    <p className='subtitle'>Bottom tile</p>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <p className='title'>Wide tile</p>
                    <p className='subtitle'>Aligned with the right tile</p>
                    <div className='content'>
                    </div>
                  </article>
                </div>
              </div>
              <div className='tile is-vertical is-6'>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content'>
                      <h4 className='title has-text-centered'>Languages && Frameworks</h4>
                      {/* <p className='subtitle'>And Frameworks</p> */}
                      <div className='columns is-mobile is-gapless'>
                        <div className='column'>
                          <ul>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SQL / MySQL</li>

                            <li>MongoDB</li>
                            <li>PHP</li>
                            <li>Python</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul>
                            <li>node.js</li>
                            <li>ReactJs</li>
                            <li>Express</li>
                            <li>jQuery</li>
                            <li>Redux</li>
                            <li>SASS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content'>
                      <h4 className='title has-text-centered'>Skills, Tools && Experience</h4>
                      <div className='columns is-mobile is-gapless'>
                        <div className='column'>
                          <ul>
                            <li>RESTful APIs</li>
                            <li>Git / Github</li>
                            <li>Bash Scripts</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul>
                            <li>Mac OSX</li>
                            <li>Windows</li>
                            <li>Kali Linux</li>
                            <li>Apple Scripts</li>
                          </ul>
                        </div>
                    </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className='column'></div>
        </div>
    )
  }

export default connect()(AboutMe);
