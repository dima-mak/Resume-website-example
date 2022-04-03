import React from 'react';
import './testimonials.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Testimonials = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail sNclasame='contact__option-icon' />
          <h4>Email</h4>
          <h5>annshtefania@gmail.com</h5>
          <a href='annshtefania@gmail.com'>Send a message</a>
        </article>

        <article className='contact__option'>
          <RiMessengerLine sNclasame='contact__option-icon' />
          <h4>Messager</h4>
          <h5>egatortutorials@gmail.com</h5>
          <a href='https://m.me/ernest.achiever'>Send a message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp sNclasame='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+123456789</h5>
          <a href='https://api.whatsapp.com'>Send a message</a>
        </article>
      </div>

      <form action=''>
        <input type='text' name='' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea
          name='message'
          rows='7'
          placeholder='Your Message'
          required
        ></textarea>
        <button
          type='submit'
          className='btn btn-primary'
          style={{ margin: '20px 0' }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Testimonials;
