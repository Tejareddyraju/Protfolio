import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import Pageheadcontainer from '../../Components/Pageheadcontainer/Index'
import { Animate } from 'react-simple-animate'
import { DiAndroid, DiApple } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
import './index.scss'


const index = () => {
  const personalDetails = [
    {
      label: 'FullName',
      value: 'Teja Ramana Reddy'
    },
    {
      label: 'Age',
      value: 22
    },
    {
      label: 'Email',
      value: 'tejareddyraju7@gmail.com'
    },
    {
      label: 'Address',
      value: 'India'
    }
  ]

  const experience = "Enthusiastic and dedicated Software Developer with 8 months of Internship experience in software development. Proficient in building robust, scalable web applications while adhering to industry best practices and coding standards. Skilled in utilizing React.js to create interactive user interfaces and implementing RESTful APIs for seamless communication between front-end and back-end systems. Strong problem-solving abilities and a collaborative team player, adept at working in Agile environments to deliver high-quality software solutions."

  return (
    <section id='about' className='about'>
      <Pageheadcontainer HeaderText='ABOUT ME' icon={<BsInfoCircleFill size={40} />} />
      <div className='about-content'>
        <div className='about-content-personal'>
          <Animate
            play
            duration={1.5}
            delay={0.2}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >

            <h3>Front End Developer</h3>
            <p>{experience}</p>

          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className='personalinfo'>Personal INFO</h3>
            <ul>
              {
                personalDetails.map((items, key) => {
                  return (
                    <li key={key}><span className='title'>{items.label}:{items.value}</span></li>
                  )
                })
              }
            </ul>
          </Animate>
        </div>
        <div className='about-content-servicies'>
          <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform: 'translateX(600px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
          >
          <div className='about-content-servicies-innercontent'>
            <div><FaDev color='var(--yellow--theme-main-color)' size={60} /></div>
            <div><DiAndroid color='var(--yellow--theme-main-color)' size={60} /></div>
            <div><FaDatabase color='var(--yellow--theme-main-color)' size={60} /></div>
            <div><DiApple color='var(--yellow--theme-main-color)' size={60} /></div>
          </div>
          </Animate>
        </div>
        
      </div>

    </section>
  )
}

export default index