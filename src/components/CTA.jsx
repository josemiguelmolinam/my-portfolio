import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Want to get in touch? <br className='sm:block hidden' /> Click the link
        and send me a message.{' '}
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export { CTA };
