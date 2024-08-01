import React, { useState } from 'react'
import Pageheadcontainer from '../../Components/Pageheadcontainer/Index'
import { Animate } from 'react-simple-animate'
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";

import './index.scss'

const Index = () => {

  const [message, setmessage] = useState('')

  const sendWatsappmsg = () => {
    let phnNumber = '+916302112451'
    let url = `http://wa.me/${phnNumber}?text=${encodeURIComponent(message)}`
    window.location.href = url
  }

  const sendtomail = () => {
    let mail = 'tejareddyraju1432@gmail.com'
    let url = `mailto:${mail}?subject=${encodeURIComponent(message)}`
    window.location.href = url
  }

  return (
    <section id='contact' className='contact'>
      <Pageheadcontainer HeaderText='CONTACT' icon={<GrContactInfo size={40} />} />
      <div className='contact-content'>
        <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0)'
          }}
        >
          <h3 className='contact-content-header'>Connect with Me </h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: 'translateX(200px)'
          }}
          end={{
            transform: 'translateX(0)'
          }}
        >

          <div className='contact-content-form'>
            <h2>Description</h2>
            <textarea className='contact-content-text'
              value={message}
              placeholder="Hey , I'm Teja reddy"
              onChange={(e) => setmessage(e.target.value)}
            />
            <div className='contact-content-buttons'>
              <button className='contact-content-watsapp' onClick={() => sendWatsappmsg()}><FaWhatsapp size={20} color='green' />Watsapp</button>
              <button className='contact-content-email' onClick={() => sendtomail()}><IoMailOutline size={20} color='blue' />E-Mail</button>

            </div>
          </div>
        </Animate>



      </div>
    </section>

  )
}



export default Index
