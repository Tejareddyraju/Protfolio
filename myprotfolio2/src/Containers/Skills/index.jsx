import React from 'react'
import { GiGiftOfKnowledge } from "react-icons/gi";
import Pageheadcontainer from '../../Components/Pageheadcontainer/Index'
import { skillsData } from './utils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress';
import './index.scss'


const index = () => {
  return (
    <div>
      <section id='skills' className='skills'>
        <Pageheadcontainer HeaderText='SKILLS' icon={<GiGiftOfKnowledge size={40} />} />

        <div className='skills-content'>
          {
            skillsData.map((items, i) => (
              <div className='skills-content-inner' key={i}>
                <Animate
                  play
                  duration={1.5}
                  delay={0.3}
                  start={{
                    transform: 'translateX(-200px)'
                  }}
                  end={{
                    transform: 'translateX(0px)'
                  }}
                >
                  <h3 className='skills-content-inner-category'>{items.label}</h3>
                  <div>
                    {
                      items.data.map((item, index) => (
                        <AnimateKeyframes
                          play
                          duration={1}
                          keyframes={['opacity:1', 'opacity:0']}
                          iterationCount="1"
                        >
                          <div className='progress-bar' key={index}>
                            <p>{item.skillName} : Knowledge on {item.percentage}%</p>
                            <Line
                              percent={item.percentage}
                              strokeWidth={3} // Increase the stroke width here
                              strokeColor='var(--yellow--theme-main-color)'
                              trailWidth={20}
                              strokeLinecap='square'
                            />


                          </div>

                        </AnimateKeyframes>
                      ))
                    }
                  </div>

                </Animate>

              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default index