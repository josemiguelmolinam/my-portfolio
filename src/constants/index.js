import hack from '../assets/images/hack.png';
import {
  crypto,
  veterinary,
  money,
  ai,
  contact,
  css,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  react,
  tailwindcss,
  mysql,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'Javascript',
    type: 'Frontend',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Version Control',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
];

export const experiences = [
  {
    title: 'Web Full Stack Developer',
    company_name: 'HACK A BOSS',
    icon: hack,
    iconBg: '#000000',
    date: 'Mar 2023 - Aug 2023',
    points: [
      'Collaborated in teams on various projects, utilizing technologies such as HTML5, CSS3, JavaScript, MySQL, Node.js, and React.js.',
      'Acquired skills in full-stack web development during my participation in the bootcamp, covering HTML5, CSS3, JavaScript, MySQL, Node.js, and React.js.',
      'Executed notable projects, including the development of a hangman game and a backend server for a travel notes application, along with creating the frontend.',
      'These experiences not only enhanced my technical skills but also underscored the importance of teamwork and the development of essential soft skills in the professional world.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/josemiguelmolinam',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/jose-molina-morales/',
  },
];

export const projects = [
  {
    iconUrl: ai,
    theme: 'btn-back-black',
    name: 'AI-Powered Image Generator',
    description:
      'Create stunning images from text prompts using the power of AI! This image generator is built with Python and Streamlit.',
    link: 'https://github.com/josemiguelmolinam/DALL-E-Image-Generator-App',
  },
  {
    iconUrl: crypto,
    theme: 'btn-back-green',
    name: 'CryptoWatch Live Cryptocurrency',
    description:
      'Track cryptocurrency prices in real-time with a user-friendly interface. Create a personalized watchlist, get comprehensive details on various cryptocurrencies, and stay updated on market trends.',
    link: 'https://github.com/josemiguelmolinam/cryptoWatch_live_cryptocurrency',
  },
  {
    iconUrl: money,
    theme: 'btn-back-blue',
    name: 'Expense Tracker',
    description:
      'Easily track and manage your expenses across different categories. Set budgets, gain insights through visualizations, and make informed financial decisions effortlessly.',
    link: 'https://github.com/josemiguelmolinam/expense_control_app',
  },
  {
    iconUrl: veterinary,
    theme: 'btn-back-red',
    name: 'Veterinary Clinic Patient Tracking',
    description:
      'Deployment of a veterinary clinic patient tracking application for scheduling and managing pet appointments',
    link: 'https://github.com/josemiguelmolinam/veterinary_clinic_patient_tracking_application',
  },
];
