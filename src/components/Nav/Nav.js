import React from 'react';
import SideNav from '../SideNav/SideNav.js';
import './Nav.scss';

class Nav extends React.Component {

  sideNavToggle() {
    const sideNav = document.getElementById('side-nav');
    sideNav.classList.toggle('hidden');
  }

  render() {
    return (
      <nav id='nav'>
        <a href='#work-section' className='nav-links'>
          .work()
        </a>
        <a href='#skills-section' className='nav-links'>
          .skills()
        </a>
        <h1>
          <a id='logo' href='/'>ls</a>
        </h1>
        <a href='#about-section' className='nav-links'>
          .about()
        </a>
        <a href='#contact-section' className='nav-links'>
          .contact()
        </a>
        <span className="material-icons burger-icon" onClick={this.sideNavToggle}>
          menu
        </span>
        <SideNav />
      </nav>
    );
  }
}

export default Nav;
