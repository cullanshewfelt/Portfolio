import React, {Component, useState} from 'react';
import EmailSVG from '../Icons/EmailSVG';
import GithubSVG from '../Icons/GithubSVG';
import LinkedInSVG from '../Icons/LinkedInSVG';
import SoundcloudSVG from '../Icons/SoundcloudSVG';


const AboutMe = () => {
  document.title = 'Cullan Shewfelt | Home';
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
                  {/* <article className='tile is-child notification is-primary has-text-centered'>
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
                    href='mailto:cullanrocks@gmail.com'
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
                    href='https://www.soundcloud.com'
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
                  </article> */}
                </div>
              </div>
            </div>
          </div>
          <div className='column'></div>
        </div>
    )
  }

export default AboutMe;
