"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "93d67399-7852-4437-b553-73042a7abb7c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-center mb-4">
              Ask Me Anything
            </h2>
            <div className="card bg-dark-subtle border-0 shadow-lg p-4">
              <form onSubmit={onSubmit} className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      className="form-control bg-dark text-white border-secondary" 
                      id="nameInput"
                      name="name" 
                      placeholder="Name" 
                      required 
                    />
                    <label htmlFor="nameInput" className="text-light-emphasis">Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="phoneInput"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                    <label htmlFor="phoneInput" className="text-light-emphasis">Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      id="emailInput"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="emailInput" className="text-light-emphasis">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-dark text-white border-secondary"
                      id="messageInput"
                      name="message_content"
                      placeholder="Message"
                      style={{ height: "150px" }}
                      required
                    ></textarea>
                    <label htmlFor="messageInput" className="text-light-emphasis">Message</label>
                  </div>
                </div>
                <div className="col-12 d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg py-3 fw-bold"
                  >
                    <i className="bi bi-send me-2"></i> Send Message
                  </button>
                </div>
              </form>
              {result && 
                <div className={`alert ${result.includes("Success") ? "alert-success" : "alert-info"} text-center mt-4`}>
                  {result}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}