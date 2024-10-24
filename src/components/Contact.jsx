import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ReactComponent as IconSend } from '../images/bx-send.svg';
import {ReactComponent as IconInsta} from '../images/bxl-instagram.svg';
import {ReactComponent as IconFb} from '../images/bxl-facebook.svg';
import {ReactComponent as IconEnv} from '../images/bx-envelope.svg';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS config
    emailjs
      .sendForm(
        'service_824yuiv', // Replace with your Service ID
        'template_b3d9gos', // Replace with your Template ID
        e.target,
        'Qy5AtotEDEvC3J1hr' // Replace with your User ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <hr className="contact-divider" />

      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-left">
          <h3>Ready to create a <span className="highlight">project</span> with me?</h3>
          <ul className="contact-info">
            <li className="contact-box">
              <i className="fas fa-envelope"></i> <IconEnv/>gustilo2321@gmail.com
            </li>
            <li className="contact-box">
              <i className="fab fa-instagram"></i> <IconInsta/><a href="https://www.instagram.com/urfave_eath?igsh=MXBsYmIycTViOXEwbQ==">urfave_eath</a>
            </li>
            <li className="contact-box">
              <i className="fab fa-facebook"></i> <IconFb/><a href="https://www.facebook.com/ILLLENTE">ILL LENTE Visuals</a>
            </li>
          </ul>
        </div>

        {/* Right Section (Form) */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h4>Fill up the form and reach out to me!</h4>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-send">
              <i className="fas fa-paper-plane"></i><IconSend/> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;