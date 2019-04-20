import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from '../SubComponents/Loader';
import {initializeData} from '../../actions/dataActions';

const Dashboard = () => {
  document.title = 'Cullan Shewfelt | Web Developer';
    return (
      <div className='dashboard'>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title"></p>
                  <p className="subtitle">Hello World! My name is Cullan Shewfelt and I am a web developer from Los Angeles. </p>
                </article>
                <article className="tile is-child notification is-primary">
                  <p className="title">...tiles</p>
                  <p className="subtitle">Bottom tile</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-primary">
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <div className="content">
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <div className="content">
                <p className="title">Languages</p>
                <p className="subtitle">And Skills</p>
                <div className="content">
                  <ul>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>Redux</li>

                  </ul>
                </div>
              </div>
            </article>
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

      </div>
    )
  }

export default connect()(Dashboard);
