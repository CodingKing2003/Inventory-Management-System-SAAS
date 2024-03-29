"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewUnits = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const baseurl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseurl}/api/units`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <FormHeader title="New Unit" href="/dashboard/inventory/" />
      <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              name="title"
              label="Unit Title"
              type="text"
              register={register}
              required
              errors={errors}
              className="w-full"
            />

            <TextInput
              name="abbreviation"
              label="Unit Abbreviation"
              type="text"
              register={register}
              errors={errors}
              className="w-full"
            />
          </div>
          <SubmitButton loading={loading} title={"Unit"} />
        </form>
      </div>
    </div>
  );
};

export default NewUnits;
