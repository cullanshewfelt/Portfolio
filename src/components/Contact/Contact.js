import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom'
import EmailSVG from '../Icons/EmailSVG';
import SVGtest from '../Icons/SVGtest';
import LinkedInSVG from '../Icons/LinkedInSVG';


const Contact = () => {
  document.title = 'Cullan Shewfelt | Contact';

  const defaultMainFill = '#000000';
  const defaultBackFill = '#4dcce6';

  const [isHovered, setHover] = useState('');
  const [mainFill, setMain] = useState(defaultMainFill);
  const [backFill, setBackground] = useState(defaultBackFill);

  const handleChange = () => {
    !!isHovered // switch main and back fills for hover effect
      ? setMain(defaultMainFill) & setBackground(defaultBackFill)
      : setMain(defaultBackFill) & setBackground(defaultMainFill)
  }

  return (
      <div className='tile is-ancestor contact-dashboard'>
        <div className='tile is-parent is-3'>
        </div>
        <div className='tile is-parent is-6'>
          <article className='tile is-child notification is-primary has-text-centered'>
            <div className='content'>
              <h4 className='title'>Contact Me</h4>
              <hr/>
              <br/>
              <ul>
                <li>
                  The best way to get in touch with me is via phone or email.
                </li>
                <li>
                  If you'd prefer to communicate by phone I can email you my number.
                </li>
              </ul>
              <br/>
              <br/>
              <a
                target='_blank'
                href='mailto:cullanrocks@gmail.com'
                title='Email Me'
                onMouseEnter={() => {setHover('email-icon') & handleChange()}}
                onMouseLeave={() => {setHover('') & handleChange()}}
              >
                <EmailSVG props={isHovered === 'email-icon'
                  ? {className:'email-icon social-icon', mainFill, backFill}
                  : {className:'email-icon social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}
                />
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/cullan-shewfelt'
                title='LinkedIn Profile'
                onMouseEnter={() => {setHover('linkedin-icon') & handleChange()}}
                onMouseLeave={() => {setHover('') & handleChange()}}
              >
                <LinkedInSVG props={isHovered === 'linkedin-icon'
                  ? {className:'linkedin-icon social-icon', mainFill, backFill}
                  : {className:'linkedin-icon social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}
                />
              </a>
              <a
                target='_blank'
                href='https://github.com/cullanshewfelt'
                title='Github Profile'
                onMouseEnter={() => {setHover('github-icon') & handleChange()}}
                onMouseLeave={() => {setHover('') & handleChange()}}
              >
                <SVGtest props={isHovered === 'github-icon'
                  ? {className:'github-icon social-icon', mainFill, backFill}
                  : {className:'github-icon social-icon', mainFill: defaultMainFill, backFill: defaultBackFill}}
                />
              </a>
            </div>
          </article>
        </div>
        <div className='tile is-parent is-3'>
        </div>
      </div>
  )
}

export default Contact;
