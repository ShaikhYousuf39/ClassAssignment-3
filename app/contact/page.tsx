export default function ContactSection() {
    return (
      <section className="contact-section py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <p className="mb-6 text-lg text-gray-700">
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
        </p>
  
        <form className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Your Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
          </div>
  
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-300">
            Send Message
          </button>
        </form>
  
        <div className="mt-10">
          <p className="text-lg font-semibold">Or reach us at:</p>
          <p className="text-lg text-teal-500">+92-315-8130073</p>
          <p className="text-lg text-teal-500">yousufshaikh381@gmail.com</p>
        </div>
      </section>
    );
  }
  