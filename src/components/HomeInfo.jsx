import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Jose Miguel</span> 👋
      <br />A Full Stack Developer Junior living between Spain 🇪🇸 and Japan 🇯🇵
    </h1>
  ),
  2: (
    <InfoBox
      text='My passion for technology has fueled my journey through diverse and exciting projects. Curious to know more about my adventures in the world of development? Click below to uncover the details and join me on this exciting ride! 🚀'
      link='/about'
      btnText='Learn more'
    />
  ),
  3: (
    <InfoBox
      text='Explore my showcase of diverse projects that reflect my skills and creativity. Each project tells a unique story, and I invite you to delve into the world of innovation and problem-solving. Ready to be inspired? Click below to discover my portfolio of projects! 💻🚀'
      link='/projects'
      btnText='Visit my portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Let's connect and explore new possibilities together! Whether you have a project idea, a collaboration in mind, or just want to say hello, I'd love to hear from you. Click below to reach out, and let's start a conversation! 🌐✉️"
      link='/contact'
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
