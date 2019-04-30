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
      blink: false,
      blinkInterval: null,
      currentIndex: 0,
      interval: null,
      isHamburgerOpen: false,
      heading: 'Web Developer',
      headings: ['Programmer', 'Web Developer', 'Software Engineer', 'Full Stack Dev'],
      typedEffect: '             ..'
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
      headings = [...headings, headings[0]];
      headings.shift();
      this.setState({
        currentIndex: 0,
        heading: headings[0],
        typedEffect: ''
      });
      this.typeEffectHandler();
    }, 2500);
  }

  typeEffectHandler = () => {
    let { currentIndex, heading, typedEffect } = this.state;
    typedEffect.length < (heading.length)
      && currentIndex < (heading.length)
        && this.setState({
              currentIndex: currentIndex + 1,
              typedEffect: typedEffect + heading[currentIndex]
          })
          & setTimeout(this.typeEffectHandler, 30);
  }

  typeEffect = (parsedHeading) => {
    // this function basically adds conditions to render the typeEffect differently
    // depending on whether or not the navbar is open
    let { blink, heading, isHamburgerOpen, typedEffect } = this.state;

    return (typedEffect.length === heading.length + 2) && !isHamburgerOpen
        ? parsedHeading // & console.log('blink') blink effect
        : typedEffect === '' && !isHamburgerOpen
        ? ' '
        : !isHamburgerOpen
        ? parsedHeading  // working on getting a blinking effect
        : typedEffect.length === heading.length + 2 && isHamburgerOpen
        ? parsedHeading.trim() // & console.log('blink')
        : typedEffect.trim() === '' && isHamburgerOpen
        ? ' '
        : parsedHeading.trim()
  }

  blinkEffect = (parsedHeading) => {
    let blinkInterval = setInterval(this.handleBlink(), 500);
    this.setState({blinkInterval: blinkInterval});
    return this.state.blink ? '' : parsedHeading;
  }

  handleBlink = () => {
    this.setState({blink: !this.state.blink});
  }

  componentDidMount(){
    this.toggleHeader();
  }

  componentDidUpdate(){
  }

  render(){
    // console.log(this.state.typedEffect.length === this.state.heading.length + 2)
    let { currentIndex, heading, headings, isHamburgerOpen, typedEffect} = this.state;
    typedEffect = `${typedEffect}..`
    let remainingSpace = 19 - ((19 - typedEffect.length)/2) - 2;
    let parsedHeading = isHamburgerOpen
      ? (19 - typedEffect.length) % 2 === 0
          ? typedEffect.trim().padEnd(remainingSpace, ' ').padStart(19, ' ')
          : typedEffect.trim().padEnd(Math.floor(remainingSpace) , ' ').padStart(19, ' ')
      : (19 - typedEffect.length) % 2 === 0
        ? typedEffect.padStart(19, ' ').padEnd(remainingSpace, ' ')
        : typedEffect.padStart(19, ' ').padEnd(Math.floor(remainingSpace) , ' ')

    return(
      <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <div className='Spac3_Neon'>c s</div>
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
          <div className='navbar-start'>
            <div className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
              Cullan Shewfelt
            </div>
            <div className='navbar-item navbar-element'>
              ::
            </div>
            <div className={`navbar-item description-heading ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
              { this.typeEffect(parsedHeading) }
            </div>
            <div className='navbar-item navbar-element'>
              ::
            </div>
            {/*  <div className={`navbar-item description-heading ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}>
              Los Angeles, CA
            </div>  */}
          </div>
          <div className='navbar-end'>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink
              className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}
              activeClassName='selected'
              exact={true}
              to='/'
              onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}
            >
              Home {isHamburgerOpen && '|| About Me || Skills'}
            </NavLink>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink
              className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}
              activeClassName='selected'
              to='/Portfolio'
              onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}
            >
              Portfolio
            </NavLink>
            <div className='navbar-item navbar-element'>
              ||
            </div>
            <NavLink
              className={`navbar-item ${isHamburgerOpen ? 'navbar-item-open' : 'navbar-item-close'}`}
              activeClassName='selected'
              to='/Contact'
              onClick={() => {isHamburgerOpen && this.toggleHamburger(!isHamburgerOpen)}}
            >
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
// °
