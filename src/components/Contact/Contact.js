import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Contact = () => {
  document.title = 'Cullan Shewfelt | Contact';
  return (
    <div className='dashboard has-navbar-fixed-top'>
      <div className='top-grid'></div>
      <div className='tile is-ancestor'>
        <div className='tile is-parent is-3'>
        </div>
        <div className='tile is-parent is-6'>
          <article className='tile is-child notification is-primary has-text-centered'>
            <p className='title'>Contact Me</p>
            <p className='subtitle'>Aligned with the right tile</p>
            <div className='content'>
            </div>
          </article>
        </div>
        <div className='tile is-parent is-3'>
        </div>
      </div>
      <div className='bottom-grid'></div>
    </div>
  )
}

export default connect()(Contact);
