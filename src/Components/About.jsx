import React from 'react'
import {
    AiFillYoutube,
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";

  import bg from '../assets/Bhupesh.jpg'

export default function About() {
  return (
    <div className='about'>
    <h1>
    Developed By
    </h1>
    <img src={bg} alt="" />
    <h1>Bhupesh Yadav</h1>
    <div className="social">

    <span className="item">
    <a href='https://www.instagram.com/ydv.bhupesh' target="blank">
    <AiFillInstagram />
    </a>
    </span>
    <span className="item">
    <a href='https://www.github.com/bhupesh003' target="blank">

    <AiFillGithub />
    </a>
    </span>
    <span className="item">

    <a href='https://www.youtube.com/@bhupeshyadav0001' target="blank">

    <AiFillYoutube/>
    </a>
    </span>
   

    </div>
    
    </div>
  )
}
