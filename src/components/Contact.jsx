import React, { useState } from 'react'

const Contact = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    
        
        const form = new FormData();
        form.append("access_key", "be4b470e-4d17-4a7b-8cfb-c9649c7c6fda");
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("subject", formData.subject);
        form.append("message", formData.message);
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });
            
            const data = await response.json();
            if (data.success) {
                console.log("Email sent successfully:", data.message);
                setIsSubmitted(true);
            } else {
                console.error("Error sending email:", data.message);
            }
        } catch (error) {
            console.error("Submission Error:", error);
        }
    
       
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        setTimeout(() => setIsSubmitted(false), 5000);
    };
    ;

  return (
    <>
        <div className="min-h-screen items-center flex flex-col md:flex md:flex-row md:gap-4 justify-evenly bg-gray-100 py-12 px-4 lg:px-8">
      <div className="max-w-md w-full space-y-4 md:space-y-8">
        <h1 className="text-center text-3xl lg:text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          We'd love to hear from you! Please fill out the form below.
        </p>
        {isSubmitted && (
            <div className="text-center text-green-700 font-medium bg-green-100 p-4 rounded-md">
                Thank you! Your form has been submitted. Our team will contact you as soon as possible.
            </div>
        )}

        <form
          
          className="mt-4 md:mt-8 md:w-4/5 md:ml-7 space-y-3 md:space-y-6 bg-white shadow-lg rounded-lg p-8 md:p-4"
          onSubmit={handleSubmit}
          
        >
          <div className="rounded-md shadow-sm space-y-2 lg:space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="appearance-none rounded-md relative block w-full px-2 md:px-3 py-1 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="appearance-none rounded-md relative block w-full px-2 lg:px-3 py-1 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Subject"
                className="appearance-none rounded-md relative block w-full px-2 md:px-3 py-1 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="appearance-none rounded-md relative block w-full px-2 md:px-3 py-1 md:py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              
            </div>
          </div>

          <div>
          
            <button
              type="submit"
              className="group relative w-full flex justify-center px-2 md:px-3 py-1 md:py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className=' mt-7 md:mr-7 md:mt-11 flex justify-center items-center'>
        <iframe className='rounded-2xl h-[300px] w-full md:h-[400px] md:w-[300px] lg:w-[700px] lg:h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.890216762307!2d77.52344265536699!3d23.251447149246065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2z4KSP4KSy4KSP4KSo4KS44KWA4KSf4KWAIOCkl-CljeCksOClgeCkqiDgpJHgpKsg4KSV4KWJ4KSy4KWH4KSc4KWH4KS4!5e0!3m2!1shi!2sin!4v1692608846489!5m2!1shi!2sin"></iframe>

    </div>
    </div>

    </>
  )
}

export default Contact