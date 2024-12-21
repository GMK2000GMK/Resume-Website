import React, { useRef } from 'react'; // Import React and useRef
import emailjs from 'emailjs-com'; // Import EmailJS
import { FaBook, FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'; // Import icons

const ContactForm = () => {
  const form = useRef(); // Initialize useRef for the form

  // Function to handle email sending
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        'your_service_id', // Replace with your EmailJS Service ID
        'your_template_id', // Replace with your EmailJS Template ID
        form.current, // Reference to the form
        'your_user_id' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Success:', result.text); // Log success message
          alert('Message sent successfully!'); // Show success alert
        },
        (error) => {
          console.error('Error:', error.text); // Log error message
          alert('Failed to send the message. Please try again.'); // Show error alert
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Information Section */}
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>I'm open to discussing bioinformatic opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:gmkghulam2000@gmail.com" className="hover:underline">
                gmkghulam2000@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+44 7946 597411</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Reading, Berkshire, United Kingdom</span>
            </div>
            <div className="mb-4">
              <FaBook className="inline-block text-green-400 mr-2" />
              <span>Irish Citizen</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name" // Required for EmailJS
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email" // Required for EmailJS
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message" // Required for EmailJS
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;