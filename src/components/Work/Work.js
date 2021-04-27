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
            <button className='project-card-button'>View</button>
            <button className='project-card-button'>Code</button>
          </article>
          <article className='project-card'>
            <h2>TeamUp</h2>
            <button className='project-card-button'>View</button>
            <button className='project-card-button'>Code</button>
          </article>
        </div>
      </section>
    );
  }
}

export default Work;
