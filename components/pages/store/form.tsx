"use client";

import React, { useState, useEffect, useRef } from "react";
import Input from "@/components/common/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import endpoint from "@/app/network";
import Button from "@/components/common/button";
import TextArea from "@/components/common/textarea";
import { Shop } from "@/app/types/shop";
import useAuth from "@/app/context/auth";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({} as Shop);
  const [isFormValid, setIsFormValid] = useState(false);
  const { user } = useAuth() as { user: any };
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    validateForm();
  }, [name, phone]);

  const validateForm = () => {
    let errors = {} as Shop;
    const phoneRegex = /^\d{10}$/;
    if (!name) {
      errors.name = "Name is required.";
    }

    // if (!email) {
    //   errors.email = "Email is required.";
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = "Email is invalid.";
    // }

    // if (!phoneNumber) {
    //   return "Phone number is required.";
    // } else if (!phoneRegex.test(phoneNumber)) {
    //   return "Phone number is invalid.";
    // }

    if (!phone) {
      errors.phone = "Phone is required.";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone not in correct format";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  // Submit

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const fromData = new FormData();

    fromData.append("name", name);
    fromData.append("phone", phone);
    fromData.append("createdBy", user?._id);

    // fromData.append("userName");

    const result = await axios
      .post(`${endpoint.product}/createStore`, fromData, {
        headers: {
          // "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        router.refresh();
        formRef?.current?.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form ref={formRef} onSubmit={submit}>
        <div className="grid grid-cols-2 gap-x-6">
          <Input
            parentClass="col-span-1"
            label="Name Store"
            defaultValue=""
            req
            errMsg={errors.name}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setName(e.target.value)}
          />

          <Input
            parentClass="col-span-1"
            label="Phone"
            req
            type="number"
            errMsg={errors.phone}
            defaultValue=""
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPhone(e.target.value)}
          />
          <Input
            parentClass="col-span-1"
            label="Name Store"
            defaultValue=""
            placeholder=""
          />
          <TextArea cols={5} parentClass="col-span-2" label="Description" />
          <Button type="submit" text="Submit" />
        </div>
      </form>
    </div>
  );
}
