import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from './Loader';
import {initializeData} from '../../actions/dataActions';

const Header = (props) => {
  const NavBar = () => (
    <div>
      <h2 className='header__subtitle navlink-header'>
        <NavLink id='main' to='/Main' activeClassName="selected">Home</NavLink> |
      </h2>
    </div>
  )
  return(
    <div className='header'>
      <div className='container'>
        <h1 className='header__title'><NavLink to ='/'>Cullan Shewfelt</NavLink></h1>
        {/* conditionally render NavBar once selectedComposers finishes loading from our API,
        because it data structure in our state with the most data in it */}
        <NavBar/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = {
  initializeData
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
