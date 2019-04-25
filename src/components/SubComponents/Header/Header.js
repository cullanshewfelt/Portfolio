import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import {NavLink} from 'react-router-dom';
import Typist from 'react-typist'; // adds a typing / typewriter animation effect  i think it would be cool for the header
import {initializeData} from '../../../actions/dataActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isHamburgerOpen: false,
      heading: 'Web Developer',
      headings: ['Programmer', 'Web Developer', 'Software Engineer', 'Full Stack'],
      typedEffect: '       ..'
    }
  }

  changeHeader = (heading) => {
    this.setState({heading});
  }

  stopToggle = () => {
    clearInterval(temp);
  }

  toggleHamburger = (isHamburgerOpen) => {
    this.setState({isHamburgerOpen});
  }

  toggleHeader = () => {
    let { headings } = this.state;
    let temp = setInterval(()=>{
      headings.push(headings[0]);
      headings.shift();
      this.setState({
        currentIndex: 0,
        heading: headings[0],
        typedEffect: ''
      });
      this.typeEffect();
    }, 3000);
  }

  typeEffect = () => {
    let { currentIndex, heading, typedEffect } = this.state;
    typedEffect.length < (heading.length)
      ? currentIndex < (heading.length)
        && this.setState({
              currentIndex: currentIndex + 1,
              typedEffect: typedEffect + heading[currentIndex]
          })
          & setTimeout(this.typeEffect, 20)
      : typedEffect.length < (heading.length + 2)
        && this.setState({
            typedEffect: typedEffect + '.'
          })
          & setTimeout(this.typeEffect, 20)
  }

  componentDidMount(){
    this.toggleHeader();
  }

  componentDidUpdate(){
  }

  render(){
    let { currentIndex, heading, headings, isHamburgerOpen, typedEffect} = this.state;

    let remainingSpace = 19 - ((19 - typedEffect.length)/2);
    let parsedHeading = (19 - typedEffect.length) % 2 === 0
        ? typedEffect.padEnd(remainingSpace - 2, ' ').padStart(19, ' ')
        : typedEffect.padEnd(Math.floor(remainingSpace - 2) , ' ').padStart(19, ' ')

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
        <div className={`navbar-menu ${isHamburgerOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <div className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
              Cullan Shewfelt
            </div>
            <div className='navbar-item navbar-element'>
              :
            </div>
            <div className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close description-heading'}`}>
              {typedEffect.length === heading.length + 2
                ? parsedHeading
                : parsedHeading // working on getting a blinking effect
              }
            </div>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`} activeClassName='selected' exact={true} to='/' onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}>
              Home {isHamburgerOpen && '|| About Me || Skills'}
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
