import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  email: string;
};

export default function ContactMe({ email }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="hidden md:block absolute top-24 uppercase tracking-[20px] text-crepe text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-3 w-full">
        <h4 className="text-2xl md:text-4xl font-semibold text-center text-crepe">
          I have got just what you need.
          <span className="decoration-crimson/70 underline">Lets Talk.</span>
        </h4>

        <div className="text-crepe">
          <div className="flex items-center justify-center my-2">
            <EnvelopeIcon className="text-crepe h-7 w-7 animate-pulse" />
            <p className="text-xl">{email}</p>
          </div>
          <div className="flex items-center justify-center">
            <MapPinIcon className="text-crepe h-7 w-7 animate-pulse" />
            <p className="text-xl">Hong Kong</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-4/5 mx-auto"
        >
          <div className="md:flex space-x-2 hidden">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput md:w-1/2"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput md:w-1/2"
              type="text"
            />
          </div>
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput md:hidden"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput md:hidden"
            type="text"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-crepe/40 py-5 px-10 rouned-md text-crimson font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
