import React, { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router';
import Loader from '../Loader';
import SVG from 'react-inlinesvg';

import EmailSVG from './images/icons/EmailSVG';
import GitHubSVG from './images/icons/GitHubSVG';
import LinkedInSVG from './images/icons/LinkedInSVG';

// blue: #00D4FF purps: #ff33eb neutral blue: 4dcce6

const Footer = () => {
  const [fill, setFill] = useState('#4dcce6');
  const [isHovered, setHover] = useState('');
  const handleChange = () => {
    !!isHovered ? setFill('#00D4FF') : setFill('#ff33eb');
  }
    return(
      <footer className='footer is-hidden-mobile'>
        <div className='content has-text-centered'>
          <a
            target='_blank'
            href='https://www.linkedin.com'
            title='LinkedIn Profile'
            onMouseEnter={() => {setHover('linkedin-icon') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <LinkedInSVG props={isHovered === 'linkedin-icon'
              ? {className:'linkedin-icon social-icon', fill}
              : {className:'linkedin-icon social-icon', fill: '#4dcce6'}}/>
          </a>
          <a
            target='_blank'
            href='https://www.github.com'
            title='Github Profile'
            onMouseEnter={() => {setHover('github-icon') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <GitHubSVG props={isHovered === 'github-icon'
              ? {className:'github-icon social-icon', fill}
              : {className:'github-icon social-icon', fill: '#4dcce6'}}/>
          </a>
          <a
            target='_blank'
            href='mailto:cullanrocks@gmail.com'
            title='Email Me'
            onMouseEnter={() => {setHover('email-icon') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <EmailSVG props={isHovered === 'email-icon'
              ? {className:'email-icon social-icon', fill}
              : {className:'email-icon social-icon', fill: '#4dcce6'}}/>
         </a>
       </div>
     </footer>
  )
}

export default withRouter(connect()(Footer));
