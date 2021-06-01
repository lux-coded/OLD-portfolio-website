import React from 'react';
import './Header.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>{'<LukaSelak />'}</h1>
        <h2>WebDev</h2>
        <div className='header-links'>
          <a href='https://github.com/lux-coded'>
            <ion-icon name="logo-github" size='large' >
            </ion-icon>
          </a>
          <button className='resume-button'>
            Resume
            <span className="material-icons-outlined" id='resume-button-icon'>
              file_download
            </span>
          </button>
        </div>

      </header>
    );
  }
}

export default Header;
