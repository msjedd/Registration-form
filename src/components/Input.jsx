import React from "react";

export default function Input({
  type,
  value,
  id,
  placeholder,
  name,
  onChange,
}) {
  return (
    <>
      <label htmlFor="{id}">{id}</label>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
