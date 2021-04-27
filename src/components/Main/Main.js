import React from 'react';
import Nav from '../Nav/Nav.js';
import MobileNav from '../MobileNav/MobileNav.js';
import Header from '../Header/Header.js';
import Work from '../Work/Work.js';
import Skills from '../Skills/Skills.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import './Main.scss';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <main>
          <Work />
          <Skills />
          <About />
          <Contact />
        </main>
        <MobileNav />
      </div>
    );
  }
}

export default Main;
