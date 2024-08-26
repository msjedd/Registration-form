import React from "react";

export default function InputBox({
  type,
  value,
  id,
  placeholder,
  name,
  onChange,
}) {
  return (
    <>
      {/* <label htmlFor="{id}">{id}</label> */}
      <input
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
