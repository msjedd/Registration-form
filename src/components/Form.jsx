import React, { useState } from "react";
import validateForm from "./validateForm";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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

  // const [icon1, setIcon1] = useState(faEyeSlash);
  // const [icon2, setIcon2] = useState(faEyeSlash);

  const [visible, setVisible] = useState(false);
  // const [icons, setIcons] = useState({
  //   icon1: "faEyeSlash",
  //   icon2: "faEyeSlash",
  // });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = function () {
    setVisible(!visible);
    console.log(visible.icon2);

    // setIcons(!icons);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const newErrors = validateForm(inputs);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
    return;

    // handleClear();
  };

  // const handleClear = function () {
  //   setInputs({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     password: "",
  //     password2: "",
  //     code: "",
  //   });
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          value={inputs.name}
          onChange={handleChange}
          // required
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <Input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          value={inputs.phone}
          onChange={handleChange}
          // required
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={inputs.email}
          onChange={handleChange}
          // required
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <Input
          type={visible ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter your password"
          value={inputs.password}
          onChange={handleChange}
          // required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <Icon onClick={handleClick} visible={visible} />

        <Input
          type={visible ? "text" : "password"}
          name="password2"
          id="password2"
          placeholder="Confirm your password"
          value={inputs.password2}
          onChange={handleChange}
          // required
        />
        {errors.password2 && <p style={{ color: "red" }}>{errors.password2}</p>}
        <Icon onClick={handleClick} visible={visible} onTap />

        <Input
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
