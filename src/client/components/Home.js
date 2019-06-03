import React from 'react'

const Home = () => {
  return (
    <div>
      <p>I'm the home component</p>
      <button onClick={() => console.log('hi there!')}>Press me !</button>
    </div>
  )
}

module.exports = Home