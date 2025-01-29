'use client'
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Image from "next/image"
import arrow from "@/assets/img/arrow-shape.png"


interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (data: FormData) => {
      if (form.current) {
         emailjs.sendForm('eaglesthemes', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               const notify = () => toast('Message sent successfully', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} id="contact-form">
         <div className="row g-4">
            <div className="col-lg-6">
               <div className="form-clt">
                  <input type="text" {...register("user_name")} id="name" placeholder="Name" className="active" />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="form-clt">
                  <input type="text" {...register("user_email")} id="email2" placeholder="Email" />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-lg-12">
               <div className="form-clt">
                  <div className="nice-select">
                     <span className="current">
                        Subject
                     </span>
                     <ul className="list">
                        <li data-value="1" className="option selected focus">
                           Service
                        </li>
                        <li data-value="1" className="option">
                           Pricing
                        </li>
                        <li data-value="1" className="option">
                           Support
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="col-lg-12">
               <div className="form-clt">
                  <textarea {...register("message")} id="message" placeholder="Message"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-lg-7">
               <button type="submit" className="theme-btn-2 padding-style">
                  Send Message
                  <span className="shape-img">
                     <Image src={arrow} alt="shape-img" />
                  </span>
               </button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
