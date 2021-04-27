import React from 'react';
import './MobileNav.scss';

class MobileNav extends React.Component {

  sideNavToggle() {
    const sideNav = document.getElementById('mobile-nav-menu');
    sideNav.classList.toggle('hidden');
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id='mobile-nav'>

        <div id='mobile-nav-menu' className='hidden'>
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
        </div>
        <span className="material-icons burger-icon" onClick={this.sideNavToggle}>
          menu
        </span>
      </div>
    );
  }
}

export default MobileNav;
