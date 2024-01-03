import React from 'react'
import ProfilePic from '../../images/prof.jpg'
import './index.css'
import Typed from 'react-typed';

function Intro() {

  return (
    <div>
      
    <div id="intro-section">
      <h1>
        <Typed
        className="typed-text" //Applying a CSS class to Typed
        strings={["Hi, I'm Eshaan Nair!"]}
        typeSpeed={40}
        showCursor={false}
        /> </h1>
        <img id="profile-pic" src={ProfilePic} alt="Eshaan Nair" />
    </div>
    <div className="typing">
    <h2>
        I am into{' '}
        <Typed
          loop
          typeSpeed={50}
          backSpeed={50}
          strings={[
            'Web Dev',
            'Machine Learning',
            'API Dev'
          ]}
          smartBackspace
          shuffle={false}
          backDelay={1000}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="|"
          className="typed"
        />
      </h2>
      </div>
    </div>
  )
}

export default Intro