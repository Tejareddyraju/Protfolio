import React from 'react'
import './index.scss'
import {Animate} from 'react-simple-animate'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()
  const handleNavigateToContact =()=>{
          navigate('/contact')
  }
  return (
    <section id='home' className='home'>
      <div className='home-text-wrapper'>
        <h1>
          Hello,I'm Teja Reddy 
          <br/>
          Front End Developer 
        </h1>
      </div>
      <Animate
      play
      duration={1}
      delay={1}
      start={{
        transform:'translateY(400px)'
      }}
      end={
        {transform:'translateX(0px)'}
      }
      >
      <div className='home-contact-me'>
        <button onClick={handleNavigateToContact}>Connect with me</button>
      </div>
      </Animate>
    
    </section>
  )
}

export default Index