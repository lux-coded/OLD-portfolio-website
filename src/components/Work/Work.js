import React from 'react';
import './Work.scss';

class Work extends React.Component {

  render() {
    return (
      <section id='work-section'>
        <h1>Work</h1>
        <div className='project-card-container'>
          <article className='project-card'>
            <h2>SnackTime</h2>
            <h5>HTML, CSS, Sass, Javascript, React, Redux</h5>
            <p>A movie & TV show browsing app.</p>
            <button className='project-card-button'>
              <a href='https://snacktime.netlify.app/'>
                View
              </a>
            </button>
            <button className='project-card-button'>
              <a href='https://github.com/lux-coded/snack-time'>
                Code
              </a>
              {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
            </button>
          </article>
          <article className='project-card'>
            <h2>TuneSurge</h2>
            <h5>HTML, CSS, Sass, Javascript, React, Redux</h5>
            <p>Music browsing app.</p>
            <button className='project-card-button'>
              <a href='https://tunesurge.netlify.app/'>
                View
              </a>
            </button>
            <button className='project-card-button'>
              <a href='https://github.com/lux-coded/tune-surge'>
                Code
              </a>
              {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
            </button>
          </article>
          <article className='project-card'>
            <h2>Bruh</h2>
            <h5>Bruh, bruh, bruh, bruh, bruh, bruh</h5>
            <p>Bruh.</p>
            <button className='project-card-button'>
              View
            </button>
            <button className='project-card-button'>
              Code
              {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
            </button>
          </article>
          <article className='project-card'>
            <h2>Bruh</h2>
            <h5>Bruh, bruh, bruh, bruh, bruh, bruh</h5>
            <p>Bruh.</p>
            <button className='project-card-button'>
              View
            </button>
            <button className='project-card-button'>
              Code
              {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
            </button>
          </article>
        </div>
      </section>
    );
  }
}

export default Work;
