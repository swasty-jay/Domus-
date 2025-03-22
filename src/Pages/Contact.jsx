// src/Pages/ContactMe.jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../Supabase";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa"; // Icons for form fields and contact info

const ContactMe = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const { error } = await supabase.from("contacts").insert([data]);

    setIsSubmitting(false);
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      reset();
    }
  };

  useEffect(() => {
    // if (status === "success") {
    //   toast.success("Message sent successfully!", {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     theme: "colored",
    //   });
    //   // setTimeout(() => navigate("/"), 3000);
    // }
    if (status === "error") {
      toast.error("Failed to send message. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  }, [status, navigate]);

  return (
    <>
      <ToastContainer />

      <section className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
              Get in Touch with Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We’d love to hear from you! Whether you have a question, need
              assistance, or want to explore properties, our team is here to
              help.
            </p>
          </div>

          {/* Main Content: Form and Contact Info */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
              {status === "success" ? (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-green-600 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We’ll get back to
                    you soon.
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition "
                  >
                    Back to Home
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <FaUser className="mr-2 text-blue-500" />
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <FaEnvelope className="mr-2 text-blue-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email format",
                        },
                      })}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <FaComment className="mr-2 text-blue-500" />
                      Message
                    </label>
                    <textarea
                      placeholder="Write your message here..."
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters",
                        },
                      })}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 h-40 resize-none ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="md:w-1/2 bg-gray-800 text-white p-8 rounded-xl shadow-lg hidden md:block">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="text-yellow-400 text-xl mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">0245870688</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-yellow-400 text-xl mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">support@justhome</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl mr-4" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-300">Acrra,Ghana</p>
                  </div>
                </div>
              </div>
              {/* Optional: Add a small map or social media links */}
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-yellow-400 hover:text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-yellow-400 hover:text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-yellow-400 hover:text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.354.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 6.948.155 3.384 1.898 5.071 5.282 5.226 3.28.058 3.689.072 6.948.072s3.668-.014 6.948-.072c3.384-.155 5.071-1.898 5.226-5.282.058-3.28.072-3.689.072-6.948s-.014-3.668-.072-6.948c-.155-3.384-1.898-5.071-5.282-5.226C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
