"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser"

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = (params) => {

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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
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
    <form onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input type="text" placeholder="name" 
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
      <input type="email" placeholder="email" 
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        {...register("email", {
          required: 'This field is required!', 
          pattern: /^\S+@\S+$/i
        })} 
      />
      {
        errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
      }
      <textarea placeholder="message"
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

      <input type="submit" value="Send"
        className="px-10 py-4 rounded-md bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground active:outline-none active:ring-2 active:ring-accent/50 cursor-pointer capitalize" 
      />
    </form>
  );
}