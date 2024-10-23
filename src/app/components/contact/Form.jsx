"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';

const container = {
  hidden: {opacity: 0},
  show: {
      opacity: 1,
      transition: {
          staggerChildren: .3      }
  }
};

const item = {
  hidden: {scale: 0},
  show: {scale: 1}
};

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = (params) => {
    const toastId = toast.loading("Sending you message, please wait...")

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params, 
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // cannot send more than 1 email per 5 seconds
          }
        }
      )
      .then(
        () => {
          toast.success("Message sent! I will get back to you soon.", {
            id: toastId
          })
        },
        (error) => {
          toast.error("There was an error sending your message. Please try again later.", {
            id: toastId
          })
        },
      );
  };

  const onSubmit = (data) =>  {
    const templateParams = {
      to_name: "Simon",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    }
    sendEmail(templateParams);
  }
  console.log(errors);
  
  return (
    <>
      <Toaster richColors={true} />
      <motion.form onSubmit={handleSubmit(onSubmit)}
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input type="text" placeholder="name" 
          variants={item} 
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register("name", {
            required: 'This field is required!', 
            minLength: {
              value: 2, 
              message: "Name should be at least 2 characters long."
            },
            maxLength: 80
          })} 
        />
        {
          errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
        }
        <motion.input type="email" placeholder="email" 
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register("email", {
            required: 'This field is required!', 
            pattern: /^\S+@\S+$/i
          })} 
        />
        {
          errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
        }
        <motion.textarea placeholder="message"
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register("message", {
            required: 'This field is required!',
            maxLength: {
              value: 500,
              message: 'Message should be less than 500 characters.'
            },
            minLength: {
              value: 50,
              message: 'Message should be more than 50 characters.'
            }
          })} 
        />
        {
          errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span>
        }

        <motion.input type="submit" value="Send"
          variants={item}
          className="px-10 py-4 rounded-md bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground active:outline-none active:ring-2 active:ring-accent/50 cursor-pointer capitalize" 
        />
      </motion.form>
    </>
  );
}