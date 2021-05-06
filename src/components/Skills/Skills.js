import React from 'react';
import './Skills.scss';

class Skills extends React.Component {

  render() {
    return (
      <section id='skills-section'>
        <h1>Skills</h1>
        <div className='skill-card-container'>
          <article className='skill-card'>
            <h2>Javascript, React</h2>
            <h5>HTML, CSS, Sass, Javascript, React, Redux</h5>
            <p>A movie & TV show browsing app.</p>
          </article>
        </div>
      </section>
    );
  }
}

export default Skills;
