import React, { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import Loader from '../Loader';
import {initializeData} from '../../../actions/dataActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerOpen: false,
      heading: 'Web Developer',
      headings: ['Programmer', 'Web Developer', 'Software Engineer', 'Full Stack'],
      temp: undefined
    }
  }

  changeHeader = (heading) => {
    this.setState({heading});
  }

  stopToggle = () => { console.log('clearInterval') & clearInterval(temp) };

  toggleHamburger = (isHamburgerOpen) => {
    this.setState({isHamburgerOpen});
  }

  toggleHeader = () => {
    let { headings } = this.state;
    let temp = setInterval(()=>{
      headings.push(headings[0]);
      headings.shift();
      this.changeHeader(headings[0]);
    }, 2000);
    this.setState({temp});
  }

  componentDidMount(){
    this.toggleHeader();
  }

  componentDidUpdate(){
  }

  render(){
    let { heading, headings, isHamburgerOpen} = this.state;
    let remainingSpace = 17 - ((17 - heading.length)/2);
    let parsedHeading = (17 - heading.length) % 2 === 0
        ? heading.padStart(remainingSpace, ' ').padEnd(17 , ' ')
        : heading.padStart(Math.floor(remainingSpace), ' ').padEnd(17 , ' ');

    return(
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className='Spac3_Neon'>c s</div>
          {/* <div className='gtek'>{!isHamburgerOpen ? ' - cullan shewfelt': ''}</div> */}
          <button
            onClick={() => this.toggleHamburger(!isHamburgerOpen)}
            className={`button navbar-burger ${isHamburgerOpen ? 'is-active' : ''}`}
          >
            <span/>
            <span/>
            <span/>
          </button>
        </div>
        <div
          className={`navbar-menu ${isHamburgerOpen ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <div className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
              Cullan Shewfelt
            </div>
            <div className='navbar-item navbar-element'>
              :
            </div>
            <div className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close description-heading'}`}>
              {parsedHeading}
            </div>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' exact={true} to='/' onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}>
              Home
            </NavLink>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' to='/Portfolio' onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}>
              Portfolio
            </NavLink>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' to='/Contact' onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}>
              Contact
            </NavLink>
            <div className='navbar-item navbar-element'>
              ||
            </div>
          </div>
        </div>
      </nav>
  )}
}

export default connect()(Header);
