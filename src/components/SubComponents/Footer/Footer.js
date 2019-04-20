import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router";
import Loader from '../Loader';
// const githubIcon = require('svg-inline-loader?classPrefix=my-prefix-!./images/icons/github_fold.svg');

const Footer = () => {
     return(
       <footer className="footer is-hidden-mobile is-fixed-bottom">
         <div className="content has-text-centered">
           <a target="_blank" href='https://www.linkedin.com' title='LinkedIn Profile'>
             <img className='linkedin-icon'
               src={require("./images/icons/linkedin_simple.png")}
             />
           </a>
           <a target="_blank" href='https://www.github.com' title='Github Profile'>
             <img className='github-icon'
               src={require("./images/icons/github_simple.png")}
             />
           </a>
           <a target="_blank" href='mailto:cullanrocks@gmail.com' title='Email Me'>
             <img className='email-icon'
               src={require("./images/icons/email_simple.png")}
             />
           </a>

         </div>
       </footer>
    )
}

export default withRouter(connect()(Footer));
