import React, { useState } from "react";
import { Hero } from "../components/layout/UI/Hero";
import emailjs from "emailjs-com";
import "../assets/Contact.css";
import { NavLink } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Contact = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the email using EmailJS
    emailjs
      .send(
        "service_cjntqph",
        "template_yk49lfh",
        formData,
        "RJW_JuPPMJ8VLYhyf"
      )
      .then((result) => {
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          message: "",
        });
        console.log(result.text);
        // Optional alert for success
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again."); // Optional alert for failure
      });

    setOpenModal(true); // Open the modal after form submission
  };

  return (
    <>
      <Hero data={data} />
      {/* {console.log(data)} */}

      <div className="container">
        <div className="grid-col-one info-section">
          <div className="contact-info grid">
            <h5>
              {data.title} <span>{data.name}</span>
              <hr className="hr" />
            </h5>
            <p>
              <MdOutgoingMail />
              {data.contactInfo.email}
            </p>
            <p>
              <MdOutlinePhoneCallback />
              {data.contactInfo.phone}
            </p>

            {openModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <h2>Submission Successful!</h2>
                  <p>
                    <strong>Full Name:</strong> {formData.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Contact:</strong> {formData.contact}
                  </p>
                  <p>
                    <strong>Message:</strong> {formData.message}
                  </p>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="btn-new margin-top"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="form-manage">
            <form onSubmit={handleSubmit} className="form-new">
              <div className="flex-new-form">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-new-form">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-new-form">
                <label>Contact:</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-new-form">
                <label>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-new">
                Send
                <FaExternalLinkAlt className="new-icons" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
    </>
  );
};
