import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Portfolio = () => {
  document.title = 'Cullan Shewfelt | Portfolio';
  return (
    <div className='tile is-ancestor has-navbar-fixed-top'>
      <div className='tile is-parent is-3'>
      </div>
      <div className='tile is-parent is-6'>
        <article className='tile is-child notification is-primary has-text-centered'>
          <div className='content'>
            <h4 className='title'>Portfolio</h4>
            <hr/>
            <p className='subtitle'>Some of My Work</p>
          </div>
        </article>
      </div>
      <div className='tile is-parent is-3'>
      </div>
    </div>
  )
}

export default connect()(Portfolio);
