import React from 'react';
import './SideNav.scss';

class SideNav extends React.Component {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <nav id='side-nav' className='hidden'>
        <a id='back-to-top' onClick={this.scrollToTop}>Back To Top</a>
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
