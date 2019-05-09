import React, {Component, lazy, Suspense} from 'react';
import {connect} from 'react-redux';

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
                    <div className='content'>
                      <h4 className='title has-text-centered'>About Me</h4>
                      <hr/>
                      My name is <strong>Cullan Shewfelt</strong> and
                      I am a Web Developer native to Los Angeles. I code both Front-End and Back-End, although I prefer
                      problem solving, and creating the logic and data structures that gives life to web-based applications.
                    </div>
                  </article>
                  <article className='tile is-child notification is-primary'>
                    <div className='content'>
                      <h4 className='title has-text-centered'>Goals</h4>
                      <hr/>
                      My philosophy on web development is simple: keep up to date with current and in-demand languages, frameworks, libraries,
                      and ECMAScript syntax standards. I strive to learn more, and for my knowledge and skills to be valued not only now, but for
                      years to come.
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
                      <h4 className='title has-text-centered'>Languages & Frameworks</h4>
                      <hr/>
                      <div className='columns is-mobile is-gapless'>
                        <div className='column'>
                          <ul>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>SQL / MySQL</li>
                            <li>Express</li>
                            <li>HTML5</li>
                            <li>PHP</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul>
                            <li>node.js</li>
                            <li>Redux</li>
                            <li>MongoDB</li>
                            <li>jQuery</li>
                            <li>SASS</li>
                            <li>CSS3</li>
                            <li>Python</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content'>
                      <h4 className='title has-text-centered'>Skills, Tools & Experience</h4>
                      <hr/>
                      <div className='columns is-mobile is-gapless'>
                        <div className='column'>
                          <ul>
                            <li>Git / Github</li>
                            <li>RESTful APIs</li>
                            <li>CLI Apps</li>
                            <li>Bash Scripts</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul>
                            <li>Mac OSX</li>
                            <li>Windows</li>
                            {/* <li>Kali Linux</li> */}
                            {/* <li>Apple Scripts</li> */}
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
