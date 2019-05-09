import React, {Component, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';

import {initializeData} from '../../actions/dataActions';

const Dashboard = () => {
  document.title = 'Cullan Shewfelt | Web Developer';
    return (
      <div className='dashboard'>
        <div className='dashboard-2'></div>
        <div className='top-grid'></div>
        <div className='bottom-grid'></div>
      </div>
    )
  }

export default connect()(Dashboard);
