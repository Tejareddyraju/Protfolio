import React, { useState } from 'react'
import {FaBars,FaUserGraduate} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {HiX} from 'react-icons/hi'
import './index.scss'



let data =[
    {
        label: 'HOME',
        to:'/'
    },
    {
        label: 'ABOUT',
        to:'/about'
    },
    {
        label: 'EXPERIENCE',
        to:'/resume'
    },
    {
        label: 'SKILLS',
        to:'/skills'
    },
    {
        label: 'CONTACT',
        to:'/contact'
    }
  ]  


const Navbar = () => {
    const [toggleicon,setToggleicon] = useState(false)
    const handletoggleicon = () =>{
        setToggleicon(!toggleicon)
    }
 
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'} className='navbar-container-logo'>
                    <FaUserGraduate size={30}/>
                </Link>
            </div>
            <ul className={`navbar-container-menu ${toggleicon ? 'active' : ""} ` }>
                {
                    data.map((items,key)=>
                        <li key={key} className='navbar-container-menu-item'>
                          <Link to={items.to} className='navbar-container-menu-item-links'>
                            {items.label}
                          </Link>
                        </li>
                    )
                }
            </ul>
            <div className='nav-icon' onClick={handletoggleicon}>
                {
                    toggleicon ? <HiX size={30}/> : <FaBars size={30} />
                }

            </div>

        </nav>
    </div>
  )
}

export default Navbar