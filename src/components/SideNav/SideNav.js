import React from 'react';
import './SideNav.scss';

class SideNav extends React.Component {

  render() {
    return (
      <nav id='side-nav' className='hidden'>
        <a href='#work-section' className='side-nav-links'>
          .work()
        </a>
        <a href='#skills-section' className='side-nav-links'>
          .skills()
        </a>
        <a href='#about-section' className='side-nav-links'>
          .about()
        </a>
        <a href='#contact-section' className='side-nav-links'>
          .contact()
        </a>
      </nav>
    );
  }
}

export default SideNav;
