import { regExpEmail, regExpName, errorMessages } from "./constans";

export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return { message: "", invalid: true };
  }

  if (!regExpName.test(name)) {
    return { message: errorMessages.errInputName, invalid: true };
  }

  return { message: "", invalid: false };
};

export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return { message: "", invalid: true };
  }

  if (!regExpEmail.test(email)) {
    return { message: errorMessages.errInputEmail, invalid: true };
  }

  return { message: "", invalid: false };
};
