'use client'
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   phone: number;
   subject: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      subject: yup.string().required().label("Subject"),
      message: yup.string().required().label("Message"),
   })
   .required();

const TestimonialForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = () => {
      const notify = () => toast('Comment sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 mt-md-0">
         <div className="row g-3">
            <div className="col-sm-6">
               <label htmlFor="name">Your name*</label>
               <input type="text" {...register("name")} id="name" defaultValue="Robot fox" />
               <p className="form_error">{errors.name?.message}</p>
            </div>
            <div className="col-sm-6">
               <label htmlFor="email">Your Email*</label>
               <input type="email" {...register("email")} id="email2" defaultValue="info@example.com" />
               <p className="form_error">{errors.email?.message}</p>
            </div>
            <div className="col-sm-6">
               <label htmlFor="subject">subject*</label>
               <input type="text" {...register("subject")} id="subject" defaultValue="Subject" />
               <p className="form_error">{errors.subject?.message}</p>
            </div>
            <div className="col-sm-6">
               <label htmlFor="number">Your Phone*</label>
               <input type="text" {...register("phone")} id="number" defaultValue="+1253 457 7840" />
               <p className="form_error">{errors.phone?.message}</p>
            </div>
            <div className="col-12">
               <label htmlFor="massage">Message*</label>
               <textarea id="massage" {...register("message")} placeholder="Write Message"></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>
         </div>
         <button>Send Message</button>
      </form>
   )
}

export default TestimonialForm
