import React, { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from '../Loader';
import {initializeData} from '../../../actions/dataActions';

const Header = () => {
  const [isHamburgerOpen, toggleHamburger] = useState(false);
  return(
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className='Spac3_Neon'>c s</div>
        <div className='gtek'>{!isHamburgerOpen ? ' - cullan shewfelt': ''}</div>
        <button
          onClick={() => toggleHamburger(!isHamburgerOpen)}
          className={`button navbar-burger ${isHamburgerOpen ? 'is-active' : ''}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        className={`navbar-menu ${isHamburgerOpen ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <div className={`navbar-item navbar-item-text ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
            cullan - shewfelt
          </div>
          <div className={`navbar-item navbar-item-text ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>

          </div>
          <div className={`navbar-item navbar-item-text ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
            developer
          </div>
          <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' exact={true} to='/' onClick={() => {isHamburgerOpen && toggleHamburger(!isHamburgerOpen)}}>
            home
          </NavLink>
          <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' to='/Portfolio' onClick={() => {isHamburgerOpen && toggleHamburger(!isHamburgerOpen)}}>
            portfolio
          </NavLink>
          <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' to='/Contact' onClick={() => {isHamburgerOpen && toggleHamburger(!isHamburgerOpen)}}>
            contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default connect()(Header);
