// validation.js

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isNonEmptyString = (str) => {
  return typeof str === "string" && str.trim().length > 0;
};

export const isValidDate = (date) => {
  return !isNaN(Date.parse(date));
};

export const isNumberInRange = (number, min, max) => {
  return typeof number === "number" && number >= min && number <= max;
};

