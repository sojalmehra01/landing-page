import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_3c2hqou', 'template_cqg5g7f', form.current, 'J9vhCWeV9wFQoBWFm')
    .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

 return (
  <div className="min-h-screen flex justify-start items-center bg-zinc-900">
    <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-md mx-auto ml-28 p-8 bg-white rounded-lg shadow-md">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="from_name" required className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="from_email" required className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" required className="mt-1 block w-full py-2 px-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none h-28"></textarea>
        </div>
      </div>
      <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Send
      </button>
     </form>

    
  <div className='flex-grow flex items-center justify-center overflow-hidden'>
    <div className="animate-scrollY text-8xl whitespace-nowrap">
      {["This is ","Your","Ultimate","Work","Management","Solution . . ."].map((item, index) =>
        <p key={index} className='text-md font-semibold tracking-tight leading-none'>
          {item}
        </p>)}
    </div>
  </div>
     

      <style jsx>{`
       .animate-scrollY {
          animation: scrollY 8s linear infinite;
        }
        @keyframes scrollY {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
);
};