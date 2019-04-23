import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Portfolio = () => {
  document.title = 'Cullan Shewfelt | Portfolio';
  return (
    <div className='dashboard has-navbar-fixed-top'>
      <div className='top-grid'></div>
      <div className='tile is-ancestor'>
        <div className='tile is-parent is-3'>
        </div>
        <div className='tile is-parent is-6'>
          <article className='tile is-child notification is-primary has-text-centered'>
            <p className='title'>Portfolio</p>
            <p className='subtitle'>Some of My Work</p>
            <div className='content'>
            </div>
          </article>
        </div>
        <div className='tile is-parent is-3'>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='bottom-grid'></div>
    </div>
  )
}

export default connect()(Portfolio);
