import React from 'react';
import './Header.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>{'<LukaSelak />'}</h1>
        <h2>WebDev</h2>
        <div className='header-icons'>
          <ion-icon name="logo-github" size='large'></ion-icon>
          <ion-icon name="logo-linkedin" size='large'></ion-icon>
          <ion-icon name="mail" size='large'></ion-icon>
        </div>

      </header>
    );
  }
}

export default Header;
