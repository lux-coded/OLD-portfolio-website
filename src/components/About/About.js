import React from 'react';
import './About.scss';

class About extends React.Component {

  render() {
    return (
      <section id='about-section'>
        <h1>About</h1>
        <br />
        <p style={{ textAlign: 'center' }}>Greetings,
          <br />
          <br />
          My name is Luka and I am a Front End Web Developer.
          <br />
          I have been a self-taught web dev for almost year now ever since I discovered how the web is built. I am always on the lookout for a challenging and interesting opportunity to showcase and level up my skills and knowledge. If you've enjoyed my portfolio, reach out. Let's work.</p>
      </section>
    );
  }
}

export default About;
