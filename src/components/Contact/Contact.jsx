import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Container from '../Shared/Container';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r63irmn', 'template_r6jjf1q', form.current, {
        publicKey: 'bPGt09EAp_M8HkYBP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('success')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(error.text)
        },
      );
  };
  return (
    <Container>
      <div id='contact' className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-0 my-20'>
        <div className='w-full lg:w-[48%]'>
          <h1 className='text-2xl font-bold'>Contact us</h1>
          <p className='flex items-center gap-2'><MdEmail />Almas7384@gmail.com</p>
          <p className='flex items-center gap-2'><FaPhoneAlt />0170499...</p>
        </div>
      <div className='w-full lg:w-[48%]'>
      <form ref={form} onSubmit={sendEmail}>
        <label className='text-gray-700'>Name</label>
        <input className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            ' type="text" name="user_name"

        />
        <label className='text-gray-700'>Email</label>
        <input className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
           ' type="email" name="user_email"

        />
        <label className='text-gray-700'>Message</label>
        <textarea className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
           ' name="message"

        />
        <input className='mt-3 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' type="submit" value="Send Message" />
        <Toaster />
      </form>
      </div>
    </div>
    </Container>
  );
};

export default Contact;