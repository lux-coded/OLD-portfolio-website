import React from 'react';
import Nav from '../Nav/Nav.js';
import Header from '../Header/Header.js';
import './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default Home;
