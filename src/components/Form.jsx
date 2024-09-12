import React, { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import PasswordInput from "./PasswordInput";
import validateForm from "./validateForm";

export default function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
    code: "",
  });

  const [errors, setErrors] = useState({});
  // const [visible, setVisible] = useState(false);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // const handleClick = function () {
  //   setVisible(!visible);
  // };

  const handleSubmit = function (e) {
    e.preventDefault();
    const newErrors = validateForm(inputs);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
    // return;

    handleClear();
  };

  const handleClear = function () {
    setInputs({
      name: "",
      phone: "",
      email: "",
      password: "",
      password2: "",
      code: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputBox
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          value={inputs.name}
          onChange={handleChange}
          // required
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <InputBox
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          value={inputs.phone}
          onChange={handleChange}
          // required
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

        <InputBox
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={inputs.email}
          onChange={handleChange}
          // required
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* <InputBox
          type={visible ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter your password"
          value={inputs.password}
          onChange={handleChange}
          // required
        />
        <Icon onClick={handleClick} visible={visible} /> */}
        <PasswordInput />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        {/* <InputBox
          type={visible ? "text" : "password"}
          name="password2"
          id="password2"
          placeholder="Confirm your password"
          value={inputs.password2}
          onChange={handleChange}
          required
        />
        <Icon onClick={handleClick} visible={visible} /> */}
        <PasswordInput />
        {errors.password2 && <p style={{ color: "red" }}>{errors.password2}</p>}

        <InputBox
          type="number"
          name="code"
          id="code"
          placeholder="Enter your referral code"
          value={inputs.code}
          onChange={handleChange}
          // required
        />
        {errors.code && <p style={{ color: "red" }}>{errors.code}</p>}
        <Button />
      </form>
    </div>
  );
}
