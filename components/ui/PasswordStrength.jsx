"use client";
import React, { useState, useEffect } from "react";

const PasswordStrength = ({ password }) => {
  // Define the criteria for password strength
  const minLength = 8;
  const minUppercase = 1;
  const minLowercase = 1;
  const minNumbers = 1;
  const minSpecialChars = 1;

  // Regular expressions for character types
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  // Initialize state for password strength
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    // Check the password against each criterion
    const isMinLength = password.length >= minLength;
    const isUppercase =
      (password.match(uppercaseRegex) || []).length >= minUppercase;
    const isLowercase =
      (password.match(lowercaseRegex) || []).length >= minLowercase;
    const isNumber = (password.match(numberRegex) || []).length >= minNumbers;
    const isSpecialChar =
      (password.match(specialCharRegex) || []).length >= minSpecialChars;

    // Calculate the strength based on criteria met
    let newStrength = 0;
    if (isMinLength) newStrength++;
    if (isUppercase) newStrength++;
    if (isLowercase) newStrength++;
    if (isNumber) newStrength++;
    if (isSpecialChar) newStrength++;

    // Update the strength state
    setStrength(newStrength);
    console.log(password);
  }, [lowercaseRegex, numberRegex, password, specialCharRegex, uppercaseRegex]);

  return (
    <div>
      <strong>Password Strength: </strong>
      <span
        className={`${
          strength === 0
            ? "text-red-500"
            : strength === 1
            ? "text-yellow-500"
            : "text-green-500"
        }`}
      >
        {strength === 0 ? "Weak" : strength === 1 ? "Medium" : "Strong"}
      </span>
    </div>
  );
};

export default PasswordStrength;
