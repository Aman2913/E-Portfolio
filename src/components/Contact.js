// src/ContactForm.jsx

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className='contact-section'>
      <div className='contact-section-container'>
        <h2 className='text-center mb-4'>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name:</label>
            <input
              type='text'
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              required
            />
            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email:</label>
            <input
              type='email'
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>Message:</label>
            <textarea
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id='message'
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
              required
            ></textarea>
            {errors.message && <div className='invalid-feedback'>{errors.message}</div>}
          </div>
          <button type='submit' className='btn btn-primary w-100'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
