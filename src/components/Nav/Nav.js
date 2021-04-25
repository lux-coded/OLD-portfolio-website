import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <nav>
        <a href='#work-section'>
          .work()
        </a>
        <a href='#skills-section'>
          .skills()
        </a>
        <h1>
          <a onClick={this.scrollToTop}>ls</a>
        </h1>
        <a href='#about-section'>
          .about()
        </a>
        <a href='#contact-section'>
          .contact()
        </a>
      </nav>
    );
  }
}

export default Nav;
