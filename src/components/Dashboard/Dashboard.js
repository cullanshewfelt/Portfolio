import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Dashboard = () => {
  document.title = 'Cullan Shewfelt | Web Developer';
    return (
      <div className='dashboard has-navbar-fixed-top'>
      <div className='dashboard-2'></div>
        <div className='top-grid'></div>
        <div className='columns'>
          <div className='column'></div>
          <div className='column is-four-fifths'>
            <div className='tile is-ancestor'>
              <div className='tile is-vertical is-6'>
                <div className='tile'>
                  <div className='tile is-parent is-vertical'>
                    <article className='tile is-child notification is-primary'>
                      <p className='title'></p>
                      <p className='subtitle'>Hello World! My name is Cullan Shewfelt and I am a web developer from Los Angeles. </p>
                    </article>
                    <article className='tile is-child notification is-primary'>
                      <p className='title'>...tiles</p>
                      <p className='subtitle'>Bottom tile</p>
                    </article>
                  </div>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-primary'>
                    <p className='title'>Wide tile</p>
                    <p className='subtitle'>Aligned with the right tile</p>
                    <div className='content'>
                    </div>
                  </article>
                </div>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child notification is-primary'>
                  <div className='content'>
                    <h4 className='title has-text-centered'>Languages && Frameworks</h4>
                    {/* <p className='subtitle'>And Frameworks</p> */}
                    <div className='content'>
                      <ul>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>node.js</li>
                        <li>SQL</li>
                        <li>Redux</li>
                        <li>Mongo</li>
                        <li>SASS</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className='column'></div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='bottom-grid'></div>
      </div>
    )
  }

export default connect()(Dashboard);
