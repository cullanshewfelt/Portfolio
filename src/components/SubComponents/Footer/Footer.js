import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom'

import EmailSVG from '../../Icons/EmailSVG';
import GithubSVG from '../../Icons/GithubSVG';
import LinkedInSVG from '../../Icons/LinkedInSVG';
import SoundcloudSVG from '../../Icons/SoundcloudSVG';

// color reference:
// blue: #00D4FF purps: #ff33eb neutral blue: 4dcce6

const Footer = () => {
  const defaultBackFill = '#000000';
  const defaultMainFill = '#4dcce6';

  const [isHovered, setHover] = useState('');
  const [mainFill, setMain] = useState(defaultMainFill);
  const [backFill, setBackground] = useState(defaultBackFill);

  const handleChange = () => {
    !!isHovered // switch main and back fills for hover effect
      ? setMain(defaultMainFill) & setBackground(defaultBackFill)
      : setMain(defaultBackFill) & setBackground(defaultMainFill)
  }

    return(
      <footer className='footer is-hidden-mobile'>
        <div className='content has-text-centered'>
          <a
            target='_blank'
            href='https://www.soundcloud.com'
            title='Soundcloud'
            onMouseEnter={() => {setHover('soundcloud-icon-footer') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <SoundcloudSVG props={isHovered === 'soundcloud-icon-footer'
              ? {className:'soundcloud-icon-footer social-icon', mainFill, backFill}
              : {className:'soundcloud-icon-footer social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}
            />
          </a>
          <a
            target='_blank'
            href='mailto:cullanrocks@gmail.com'
            title='Email Me'
            onMouseEnter={() => {setHover('email-icon-footer') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <EmailSVG props={isHovered === 'email-icon-footer'
              ? {className:'email-icon-footer social-icon', mainFill, backFill}
              : {className:'email-icon-footer social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/cullan-shewfelt'
            title='LinkedIn Profile'
            onMouseEnter={() => {setHover('linkedin-icon-footer') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <LinkedInSVG props={isHovered === 'linkedin-icon-footer'
              ? {className:'linkedin-icon-footer social-icon', mainFill, backFill}
              : {className:'linkedin-icon-footer social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
          </a>
          <a
            target='_blank'
            href='https://github.com/cullanshewfelt'
            title='Github Profile'
            onMouseEnter={() => {setHover('github-icon-footer') & handleChange()}}
            onMouseLeave={() => {setHover('') & handleChange()}}
          >
            <GithubSVG props={isHovered === 'github-icon-footer'
              ? {className:'github-icon-footer social-icon', mainFill, backFill}
              : {className:'github-icon-footer social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
          </a>

        </div>
     </footer>
  )
}

export default withRouter(Footer);
