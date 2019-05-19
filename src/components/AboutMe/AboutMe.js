import React, {Component, lazy, Suspense} from 'react';

const AboutMe = () => {
  document.title = 'Cullan Shewfelt | Home';
    return (
        <div className='columns has-navbar-fixed-top'>
          <div className='column'></div>
          <div className='column is-four-fifths'>
            <div className='tile is-ancestor'>
              <div className='tile is-vertical is-6'>
                <div className='tile is-parent is-vertical'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content justified-content'>
                      <h4 className='title has-text-centered'>About Me</h4>
                      <hr/>
                      My name is <strong>Cullan Shewfelt</strong> and
                      I am a Web Developer native to Los Angeles. I code both Front-End and Back-End, although I prefer working on
                      the user experience over the user interface; I enjoy problem solving, and find gratification in creating
                      the logic and data structures that breathes life to web-based applications.
                    </div>
                  </article>
                  <article className='tile is-child notification is-primary'>
                    <div className='content justified-content'>
                      <h4 className='title has-text-centered'>Goals</h4>
                      <hr/>
                      My philosophy on web development is simple: keep up with current and in-demand languages, frameworks, and libraries.
                      Strive to learn more.
                      Be a value to my team when I can.
                    </div>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content justified-content'>
                      <h4 className='title has-text-centered'>Hobbies</h4>
                      <hr/>
                      In addition to developing, I like to compose music.
                      I also do all things audio related: mixing, editing, sound design, recording etc.
                    </div>
                  </article>
                </div>
              </div>
              <div className='tile is-vertical is-6'>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <div className='content justified-content'>
                      <h4 className='title has-text-centered'>Education</h4>
                      <hr/>
                      <div className='columns is-mobile is-gapless'>
                        I have a Bachelor of Arts in Recording Arts Technology
                        with a minor in English / Creative Writing from Loyola Marymount University, where I graduated
                        with Cum Luade Honors and made the Dean's List.
                        I have a certificate from UCLA's Coding Bootcamp.
                      </div>
                    </div>
                  </article>
                </div>
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
                          </ul>
                        </div>
                        <div className='column'>
                          <ul>
                            <li>node.js</li>
                            <li>Redux</li>
                            <li>MongoDB</li>
                            <li>SASS</li>
                            <li>CSS3</li>
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
                            {/* <li>CLI Apps</li> */}
                          </ul>
                        </div>
                        <div className='column'>
                          <ul>
                            <li>Mac OSX</li>
                            <li>Windows</li>
                            {/* <li>Bash Scripts</li> */}
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

export default AboutMe;
