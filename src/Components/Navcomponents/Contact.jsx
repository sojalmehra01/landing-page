import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3c2hqou', 'template_cqg5g7f', form.current, 'J9vhCWeV9wFQoBWFm')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen flex justify-center items-center"> 
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-xl mx-auto p-[4.5rem] bg-white text-black rounded-lg">
        <div className="form-group flex flex-col">
          <label htmlFor="name" className="mb-2 font-bold">Name</label>
          <input type="text" id="name" name="from_name" required className="p-2 border border-gray-300 rounded" />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold">Email</label>
          <input type="email" id="email" name="from_email" required className="p-2 border border-gray-300 rounded" />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="message" className="mb-2 font-bold">Message</label>
          <textarea id="message" name="message" required className="p-2 border border-gray-300 rounded"></textarea>
        </div>
        <input type="submit" value="Send" className="p-3 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700" />
      </form>
    </div>

  );
};
