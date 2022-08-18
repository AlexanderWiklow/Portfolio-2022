import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/awikl%C3%B6w/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AlexanderWiklow" target="_blank" rel="noreferrer"><FaGithub/></a>
        {/* <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials