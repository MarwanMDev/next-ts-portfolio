import React from 'react';
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    console.log(formData);

  return (
    <div className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="underline decoration-[#FF0266]/50">
            Lets Talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#FF0266] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+201008300000</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#FF0266] h-7 w-7 animate-pulse" />
            <p className="text-2xl">marwan.morsi@outlook.com</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#FF0266] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Coding and Development</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register('name')}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input
                {...register('email')}
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register('subject')}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register('message')}
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-[#FF0266] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
