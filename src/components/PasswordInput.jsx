import React, { useState, useContext } from "react";

import { useVisible, useSetVisible } from "./VisibleContext";
// import { VisibleContext } from "./VisibleContext";
import InputBox from "./InputBox";
import Icon from "./Icon";

export default function PasswordInput() {
  const [input, setInput] = useState({ password: "" });
  const visible = useVisible();
  const setVisible = useSetVisible();
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <InputBox
        type={visible ? "text" : "password"}
        name="password"
        id="password"
        placeholder="Enter your password"
        value={input.password}
        onChange={handleChange}
        required
      />
      <Icon onClick={setVisible} visible={visible} />
    </>
  );
}
