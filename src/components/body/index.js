import React from 'react';
import About from './about';
import "./body.css"
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';

function Body() {
  return (
    <div className='body'>
      <section id ="about">
        <About />
      </section>
      <section id ="projects">
        <Projects />
      </section>
      <section id ="skills">
        <Skills />

      </section>
      <secion id ="contact">
        <Contact />
      </secion>
    </div>
  )
}

export default Body