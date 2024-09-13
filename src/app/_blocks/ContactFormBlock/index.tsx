"use client";

import React, { useState } from "react";
import { Page } from "../../../payload/payload-types";
import { submitForm } from "../../_api/submitForm";

type Props = Extract<Page["layout"][0], { blockType: "contactFormBlock" }>;

const ContactFormBlock: React.FC<Props & { id?: string }> = ({
  heading,
  description,
  successMessage,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    productLink: 'asdf',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await submitForm(formData);
      /*alert('Form submitted successfully!');*/
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact form', error);
      alert('Failed to submit form');
    }
  };

  function handleInvalid(event) {
    // Set a custom validation message in English
    event.target.setCustomValidity("Prosimo izpolnite to polje.");
}

function handleInvalidEmail(event) {
  // Set a custom validation message in English
  event.target.setCustomValidity("Vnesite veljaven e-poštni naslov.");
}

function handleInput(event) {
    // Clear the custom validation message when user starts typing
    event.target.setCustomValidity("");
}

  return (
    <form className="inquiry-form wow fadeInUp" data-wow-delay="0.2s" onSubmit={handleSubmit}>
      <h3 className="title-box font-weight-300 m-t0 m-b10">{heading}<span className="bg-primary"></span></h3>
      <p>{description}</p>
      {!isSubmitted ? (
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Ime"
                  value={formData.firstName}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Priimek"
                  value={formData.lastName}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                <input
                  name="phone"
                  type="text"
                  required
                  className="form-control"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  required
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  onInvalid={handleInvalidEmail}
                  onInput={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                <textarea
                  name="message"
                  rows={4}
                  className="form-control"
                  placeholder="Sporočilo"
                  value={formData.message}
                  onChange={handleChange}
                  onInvalid={handleInvalid}
                  onInput={handleInput}
                ></textarea>
              </div>
            </div>
          </div>
          <input
            type="hidden"
            name="productLink"
            value={formData.productLink}
          />
          <div className="col-lg-12 col-md-12">
            <button name="submit" type="submit" value="Submit" className="site-button button-md">
              <span>Pošlji sporočilo!</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
         <div className="alert alert-success">{successMessage}</div>
       </div>
      )}
    </form>
  );
};

export default ContactFormBlock;
