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
  const [isHovered, setHover] = useState('');
  const [mainFill, setMain] = useState('#4dcce6');
  const [backFill, setBackground] = useState('#000000');

  const handleChange = () => {
    !isHovered ? setMain('#000000') & setBackground('#4dcce6') : setMain('#4dcce6') & setBackground('#000000');
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
              ? {className:'linkedin-icon social-icon', mainFill, backFill}
              : {className:'linkedin-icon social-icon', mainFill: '#4dcce6', backFill: '#000000'}}/>
          </a>
          <a
            target='_blank'
            href='https://www.github.com'
            title='Github Profile'
            onMouseEnter={() => {setHover('github-icon') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <GitHubSVG props={isHovered === 'github-icon'
              ? {className:'github-icon social-icon', mainFill, backFill}
              : {className:'github-icon social-icon', mainFill: '#4dcce6', backFill: '#000000'}}/>
          </a>
          <a
            target='_blank'
            href='mailto:cullanrocks@gmail.com'
            title='Email Me'
            onMouseEnter={() => {setHover('email-icon') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <EmailSVG props={isHovered === 'email-icon'
              ? {className:'email-icon social-icon', mainFill, backFill}
              : {className:'email-icon social-icon', mainFill: '#4dcce6', backFill: '#000000'}}/>
         </a>
       </div>
     </footer>
  )
}

export default withRouter(connect()(Footer));
