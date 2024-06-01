import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Minh Toan</h4>
      <h4>Copyright &copy; 2023 Nguyen Vu Minh Toan</h4>
      <div className='footerLinks'>
        <a href="https://github.com/minhtoan1210" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/toan-minh-426807212/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:nguyenvuminhtoan1999@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer