import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import { FaCircleCheck } from "react-icons/fa6";

const Contact = () => {
  const notify = () => {
    toast(
      <div className="flex">
        <div className="p-5 pr-0">
          <FaCircleCheck size={20} />
        </div>
        <h1 className="p-5 font-semibold">Message sent successfully!</h1>
      </div>
    );
  };
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageRef = useRef();
  const subjectRef = useRef();
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "bcdc75f6-2d3f-4d73-8734-be1152ccfe26");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageRef.current.value = "";
    subjectRef.current.value = "";
    notify();
  };

  return (
    <div className="bg-gray-100">
      <div className=" flex justify-center items-center flex-col text-center py-24 ">
        <h1 className="text-center font-bold text-5xl tracking-tighter max-sm:text-3xl max-sm:font-extrabold">
          Get in Touch
        </h1>
        <p className="text-gray-900 text-xl max-sm:text-xs">
          Have a project in mind? Let's chat.
        </p>
        <form
          onSubmit={onSubmit}
          className="w-1/4 flex flex-col gap-4 my-12 max-sm:w-3/4  max-lg:w-2/4"
        >
          <input
            ref={nameInputRef}
            type="text"
            name="from_name"
            id=""
            placeholder="Name"
            className="p-4 rounded-lg"
            required
          />
          <input
            ref={emailInputRef}
            type="from_email"
            name="Email"
            id=""
            placeholder="Email"
            className="p-4 rounded-lg"
            required
          />
          <input
            ref={subjectRef}
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
            className="p-4 rounded-lg"
            required
          />
          <textarea
            ref={messageRef}
            type="text"
            name="Message"
            rows={6}
            placeholder="Message"
            className="p-4 rounded-lg"
            required
          />
          <button className="btn-AltDark my-6">Submit</button>
        </form>
        <Toaster className="p-5" position="top-right" />
      </div>
    </div>
  );
};

export default Contact;
