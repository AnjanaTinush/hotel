import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import ContactUsImg from "../../assets/contactus.png";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section 
      id="contact" 
      data-section="contact" 
      className="min-h-screen bg-gradient-to-br py-12 px-4"
    >
     

      <div className="max-w-7xl mx-auto relative mt-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <Image
              src="/assets/contactus.svg"
              alt="Contact Us"
              width={900}
              height={900}
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white p-8 relative overflow-hidden rounded-2xl ">
            
              <div className="relative z-10">
                <h2 className="text-6xl font-bold text-gray-800 mb-2">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                    Talk
                  </span>
                </h2>
                <p className="text-gray-600 mb-8">
                  To request a quote or want to meet up for coffee, contact us
                  directly or fill out the form and we will get back to you
                  promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all duration-200 outline-none"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all duration-200 outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all duration-200 outline-none resize-none"
                      placeholder="Type something if you want..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold  shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;