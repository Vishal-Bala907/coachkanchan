"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import Image from "next/image"
import arrow from "@/assets/img/arrow-shape.png"

interface FormData {
   name: string;
   email: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const BlogForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Comment sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <div className="comment-form-wrap mt-5">
         <h3>Leave a comments</h3>
         <form onSubmit={handleSubmit(onSubmit)} id="contact-form" method="POST">
            <div className="row g-4">
               <div className="col-lg-6">
                  <div className="form-clt">
                     <input type="text" {...register("name")} id="name" placeholder="Name" className="active" />
                     <p className="form_error">{errors.name?.message}</p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="form-clt">
                     <input type="text" {...register("email")} id="email2" placeholder="Email" />
                     <p className="form_error">{errors.email?.message}</p>
                  </div>
               </div>
               <div className="col-lg-12">
                  <div className="form-clt">
                     <textarea {...register("message")} id="message" placeholder="Message"></textarea>
                     <p className="form_error">{errors.message?.message}</p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <button type="submit" className="theme-btn-2 padding-style">
                     Post Comment
                     <span className="shape-img">
                        <Image src={arrow} alt="shape-img" />
                     </span>
                  </button>
               </div>
            </div>
         </form>
      </div>
   )
}

export default BlogForm
