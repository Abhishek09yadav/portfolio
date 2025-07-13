"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const initial = {
    name: "",
    email: "",
    phone: "",
    message: "",
    access_key: "93d67399-7852-4437-b553-73042a7abb7c",
  };

  const [formData, setFormData] = useState(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = JSON.stringify(formData);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("form submitted successfully ");
        console.log(result);
      }
    } catch (error) {
      toast.error("something went wrong");
      console.log("error", error);
    }

    setFormData(initial);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen mb-16 text-white relative">
      {/* map */}
      <iframe
        className="w-full h-60 md:h-80 filter grayscale contrast-125 brightness-90"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115548.30174616983!2d75.7643907565954!3d25.17337989383982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b30c41bb44d%3A0x5f5c103200045588!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1752420714655!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>

      {/* contact*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4 md:px-10">
        {/* contact form */}
        <form
          onSubmit={handleSubmit}
          className="w-full border border-customColorLight rounded-md p-6"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Form
          </h2>

          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 outline-none border border-customColor rounded-md focus:ring-2 focus:ring-customColorDark text-white bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 outline-none border border-customColor rounded-md focus:ring-2 focus:ring-customColorDark text-white bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 outline-none border border-customColor rounded-md focus:ring-2 focus:ring-customColorDark text-white bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 outline-none border border-customColor rounded-md focus:ring-2 focus:ring-customColorDark text-white bg-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full opacity-100 border border-customColor cursor-pointer hover:bg-customColorDark transition duration-300 px-4 py-2 rounded font-semibold text-white"
          >
            Send Message
          </button>
        </form>
        {/* contact details */}
        <div className="w-full border border-customColorLight rounded-md p-6">
          hello
        </div>
      </div>
    </div>
  );
};

export default Contact;
