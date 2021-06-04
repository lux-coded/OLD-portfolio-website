import React from 'react';
import './Skills.scss';

class Skills extends React.Component {

  render() {
    return (
      <section id='skills-section'>
        <h1>Skills</h1>
        <div className='skill-card-container'>
          <article className='skill-card'>
            <div className='skill-icons'>
              <ion-icon name="logo-html5"></ion-icon>
              <ion-icon name="logo-css3"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>
              <ion-icon name="logo-sass"></ion-icon>
              <ion-icon name="logo-react"></ion-icon>
              <ion-icon name="logo-nodejs"></ion-icon>
              <ion-icon name="logo-github"></ion-icon>
              <ion-icon name="logo-electron"></ion-icon>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Skills;
