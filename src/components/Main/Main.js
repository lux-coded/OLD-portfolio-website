import React from 'react';
import Nav from '../Nav/Nav.js';
import Header from '../Header/Header.js';
import './Main.scss';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <main>
        </main>
      </div>
    );
  }
}

export default Main;
