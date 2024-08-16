import React from "react";

export default function validateForm(data) {
  const errors = {};
  if (!data.name) {
    errors.name = "Please enter your full name";
    console.log(data.name);
  }
  if (!data.phone) {
    errors.phone = "Please enter your phone number";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is incorrect";
  }
  if (!data.password) {
    errors.password = "Please enter your password";
  } else if (data.password.length < 8) {
    errors.password = "Password should be more than 8 characters";
  }

  if (data.password2 !== data.password) {
    errors.password2 = "Passwords do not match";
  }
  if (!data.code.trim()) {
    errors.code = "Please enter correct code";
  }

  return errors;
}
