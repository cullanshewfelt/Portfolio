import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const AboutMe = () => {
  document.title = 'Cullan Shewfelt | Web Developer';
    return (
        <div className='columns has-navbar-fixed-top'>
          <div className='column'></div>
          <div className='column is-four-fifths'>
            <div className='tile is-ancestor'>
              <div className='tile is-vertical is-6'>
                <div className='tile is-parent is-vertical'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content has-text-centered'>
                      <h4 className='title has-text-centered'>About Me</h4>
                      <hr/>
                      Hello World!
                      <br/>
                      My name is <strong>Cullan Shewfelt</strong> and
                      I am a Web Developer from Los Angeles.
                    </div>
                  </article>
                  <article className='tile is-child notification is-primary'>
                    <div className='content'>
                      <h4 className='title has-text-centered'>Continued...</h4>
                      <hr/>
                      <p className='subtitle'>Middle tile</p>
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
                      <h4 className='title has-text-centered'>Languages && Frameworks</h4>
                      <hr/>
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
                      <hr/>
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
