"use client";

import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import React, { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("/api/contact", formData);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
      setSubmissionStatus("Success!");
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setSubmissionStatus("Error!");
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or send me an email -{" "}
            <a href="mailto:sergio@artrid.net">sergio@artrid.net</a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {submissionStatus === "success" && (
          <div>
            <p className="text-green-500 text-center">
              Your message was sent successfully!
            </p>
          </div>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-500 text-center">
            Oops! There was an error sending your message. Please try again.
          </p>
        )}
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <MoreHorizontal
              color="#ffffff"
              height={20}
              width={20}
              timeout={30000}
            />
          ) : (
            "Lets Collaborate"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
