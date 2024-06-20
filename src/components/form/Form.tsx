"use client"

import { formProps } from "@/types";
import React, { useRef } from "react";

const Form = ({ children,className,action, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      className={className}
      onSubmit={onSubmit}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
