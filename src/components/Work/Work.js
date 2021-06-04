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
            <div className='project-image-container'>
              <a href='https://snacktime.netlify.app/'>
                <img src='images/snacktime-thumbnail.png' className='project-image' alt='project_thumbnail' />
              </a>
            </div>
            <h4>Built with:</h4>
            <br></br>
            <div className='tech-tag-container'>
              <p className='tech-tag'>HTML</p>
              <p className='tech-tag'>CSS</p>
              <p className='tech-tag'>Sass</p>
              <p className='tech-tag'>Javascript</p>
              <p className='tech-tag'>React</p>
              <p className='tech-tag'>Redux</p>
            </div>
            <br></br>
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
            <div className='project-image-container'>
              <a href='https://tunesurge.netlify.app/'>
                <img src='images/tunesurge-thumbnail.PNG' className='project-image' alt='project_thumbnail' />
              </a>
            </div>
            <h4>Built with:</h4>
            <br></br>
            <div className='tech-tag-container'>
              <p className='tech-tag'>HTML</p>
              <p className='tech-tag'>CSS</p>
              <p className='tech-tag'>Sass</p>
              <p className='tech-tag'>Javascript</p>
              <p className='tech-tag'>React</p>
              <p className='tech-tag'>Redux</p>
              <p className='tech-tag'>Express</p>
              <p className='tech-tag'>Node</p>
            </div>
            <br></br>
            <p>Music browsing app.</p>
            <p>
              (It takes a while for the app to load initially because the server on Heroku is put
              to sleep after hour of inactivity. Please be patient until the app loads.)
            </p>
            <button className='project-card-button'>
              <a href='https://tunesurge.netlify.app/'>
                View
              </a>
            </button>
            <button className='project-card-button'>
              <a href='https://github.com/lux-coded/tunesurge'>
                Code
              </a>
              {/* <ion-icon name="code-outline" size='large'></ion-icon> */}
            </button>
          </article>
          <article className='project-card'>
            <h2>Bruh</h2>
            <div className='project-image-container'>
              <img src='' className='project-image' alt='project_thumbnail'></img>
            </div>
            <h4>Built with:</h4>
            <br></br>
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
            <div className='project-image-container'>
              <img src='' className='project-image' alt='project_thumbnail'></img>
            </div>
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
