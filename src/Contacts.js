import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (name.trim() === '') {
      errors.name = 'Please enter your name.';
    }

    if (email.trim() === '') {
      errors.email = 'Please enter your email.';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (comment.trim() === '') {
      errors.comment = 'Please enter your comment.';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted successfully!');
    }
  };

  const validateEmail = (email) => {
    // Email validation logic (you can use a library or regex)
    // Return true if valid, false otherwise
    return true;
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {errors.comment && <span>{errors.comment}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;