import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom'
// import SVG from 'react-inlinesvg';

import EmailSVG from '../../Icons/EmailSVG';
import GitHubSVG from '../../Icons/GitHubSVG';
import LinkedInSVG from '../../Icons/LinkedInSVG';

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
            <GitHubSVG props={isHovered === 'github-icon-footer'
              ? {className:'github-icon-footer social-icon', mainFill, backFill}
              : {className:'github-icon-footer social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}/>
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
       </div>
     </footer>
  )
}

export default withRouter(connect()(Footer));
