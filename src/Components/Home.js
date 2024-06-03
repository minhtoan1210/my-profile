import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import {CiCoffeeCup} from "react-icons/ci";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MINH TOAN</b></h1>
          <Typed/> 
          <div className='footerLinks' style={{justifyContent: 'space-between', marginTop: 24}}>
        <a href="https://github.com/minhtoan1210" target='_blank' rel="noreferrer"><FaGithub size={48}/></a>
        <a href="https://www.linkedin.com/in/toan-minh-426807212/" target='_blank' rel="noreferrer"><FaLinkedin size={48}/></a>
        <a href='mailTo:nguyenvuminhtoan1999@gmail.com' target='_blank' rel="noreferrer"><GrMail size={48}/></a>
      </div>  
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Javascript & Typescript</b> with all framework related. I know a bit of <b>Solidity</b> and am working on a few 
            projects in the <b>ReactJs/Nextjs & VueJs  & Nodejs/Nestjs</b> stack.<br />
            I currently learn <b>Devops</b>, <b>AWS Cloud</b> and<b> K8s</b>.<br /><br />
            Also, I love <b>playing soccer</b> <b>listening to music</b> <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={'images/Avatar.png'} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home