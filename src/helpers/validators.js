import v8n from "v8n";

const EMAIL_PATTERN =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export function validateEmail(email) {
  return EMAIL_PATTERN.test(email);
}

export function validatePassword(password) {
  return v8n()
    .string()
    .minLength(8)
    .some.uppercase()
    .some.lowercase()
    .some.numeric()
    .some.test(password);
}
