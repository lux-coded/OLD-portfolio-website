import React from 'react';
import './Header.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1 style={{ fontWeight: '800' }}>Luka Selak</h1>
        <br></br>
        <h1 style={{ fontWeight: '300' }}>Web Developer</h1>
        <div className='header-links'>
          <a href='https://github.com/lux-coded'>
            <ion-icon id='github-icon' name="logo-github" size='large'></ion-icon>
          </a>
          <a href='https://www.linkedin.com/in/luka-selak-604b49213/'>
            <ion-icon name="logo-linkedin" size='large'></ion-icon>
          </a>
          <a href='https://drive.google.com/file/d/11YxcZdJoMbMopzNq7s7__DwTYQx7fXJv/view?usp=sharing' className='resume-button'>
            Resume
            <span className="material-icons-outlined" id='resume-button-icon'>
              file_download
            </span>
          </a>
        </div>

      </header>
    );
  }
}

export default Header;
