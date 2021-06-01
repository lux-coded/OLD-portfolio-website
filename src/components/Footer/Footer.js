import React from 'react';
import './Footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className='footer-info'>
          <div className='footer-main'>
            <h1>Luka Selak</h1>
            <p>Hello</p>
          </div>
          <div className='footer-contact'>
            <h2>Contact:</h2>
            <p>selakluka@gmail.com</p>
          </div>
        </div>
        <p className='copyright'>© 2021 Luka Selak</p>
      </footer>
    );
  }
}

export default Footer;
