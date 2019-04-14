import React, {Component, lazy, Suspense} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import Loader from './SubComponents/Loader';
import {initializeData} from '../actions/dataActions';


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <div>
        <div className='dashboard'>
          <div className='container'>
            Hello
            123
          </div>

        </div>
      </div>
    )}
  }

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = {
  initializeData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
