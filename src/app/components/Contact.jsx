"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Contact() {
  const [loadingMessage, setLoadingMessage] = useState({loading:false,
  message:"",
  success:false});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData?.firstname ||
        !formData?.lastname ||
        !formData?.email ||
        !formData?.message
      ) {
        setLoadingMessage({
          loading: false,
          message: "Please fill all the fields",
          success: false,
        });
        return;
      }
      setLoadingMessage({loading:true,message:"Sending...",success:false});
      const formtData={
        firstname: `${formData?.firstname}`,
        lastname: `${formData?.lastname}`,
        email: formData?.email,
        message: formData?.message,

      }
      const res = await fetch('/api/contact',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formtData)
        
        
      })
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      if (data?.message) {
        setLoadingMessage({
          loading: false,
          message: data?.message,
          success: true,
        });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      } else {
        setLoadingMessage({
          loading: false,
          message: "Something went wrong",
          success: false,
        });
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: "Something went wrong",
        success: false,
      });
      console.error("Error submitting form:", error);
    }
    console.log("Form submitted");
  };
  return (
    <div className=" mt-[150px] backdrop-blur-[18px] z-[20] shadow-input mx-auto w-full max-w-[800px] rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      {loadingMessage?.message && <p className="text-green-500 mt-5 text-lg font-semibold">*{loadingMessage?.message}</p> }
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        You can reach out to me via email or by filling out the form below. I will get back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              value={formData?.firstname}
              onChange={handleChange}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              value={formData?.lastname}
              onChange={handleChange}
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Enter Your Message</Label>
          <textarea
            value={formData?.message}
            onChange={handleChange}
            id="message"
            name="message"
            placeholder="Write Your Message Here...."
            className="p-[10px] mb-11 rounded-md outline-none border-none h-36 bg-zinc-800 "
          />
        </LabelInputContainer>

        <button
          className=" bg-blue- group/btn relative block h-10 w-full rounded-md  font-medium text-white bg-gradient-to-br  bg-blue-900 from-blue-600 hover:bg-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-offset-blue-800"
          type="submit"
        >
          {!loadingMessage?.loading ? "Submit":"...Loading"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
