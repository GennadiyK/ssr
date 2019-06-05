import React from 'react'

const Home = () => {
  return (
    <div>
      <p>I'm the home component</p>
      <button onClick={(e) =>  { e.preventDefault(); console.log('hi there!')}}>Press me !</button>
    </div>
  )
}

export default Home