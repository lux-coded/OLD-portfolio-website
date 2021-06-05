import React from 'react';
import './Footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className='footer-info'>
          <div className='footer-main'>
            <h1>Wanna work together?</h1>
          </div>
          <div className='footer-contact'>
            <h2>Reach out to my email:</h2>
            <p>selakluka@gmail.com</p>
          </div>
        </div>
        <p className='copyright'>© 2021 Luka Selak</p>
      </footer>
    );
  }
}

export default Footer;
