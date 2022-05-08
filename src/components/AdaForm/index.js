import { useState } from "react";
import "./AdaForm.styles.css";

import { GENDERS } from "../../helpers/genders";

export default function AdaForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(undefined);
  const [hours, setHours] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [errors, setErrors] = useState(null);

  const validateForm = () => {
    const formErrors = {};
    if (firstName.length > 12) {
      formErrors.firstName = "First name is too long.";
    }
    if (lastName.length > 12) {
      formErrors.lastName = "Last name is too long.";
    }
    console.log(gender);
    if (!gender || gender === "Select one") {
      formErrors.gender = "Please choose a gender.";
    }
    if (password.length < 8) {
      formErrors.password = "Password is too short.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return false;
    }
    setErrors(null);
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidForm = validateForm();
    if (!isValidForm) return;

    console.log("form submitted");
    console.log("form data: ", {
      firstName,
      lastName,
      gender,
      hours,
      email,
      password,
      isAgree,
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">Join us today</h2>
      <p className="form-description">
        Please fill the form below to register into our platform.
      </p>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          {errors?.firstName && (
            <span id="ada-form-first-name-error" className="form-field-error">
              {errors.firstName}
            </span>
          )}
          <input
            className="form-field"
            id="ada-form-first-name"
            type="text"
            placeholder="John"
            required
            aria-invalid={errors?.firstName ? "true" : "false"}
            aria-errormessage="ada-form-first-name-error"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
          <label className="form-label" htmlFor="ada-form-first-name">
            First Name
          </label>
        </div>
        <div className="form-field-group">
          {errors?.lastName && (
            <span id="ada-form-last-name-error" className="form-field-error">
              {errors.lastName}
            </span>
          )}
          <input
            className="form-field"
            id="ada-form-last-name"
            type="text"
            placeholder="Doe"
            required
            aria-invalid={errors?.firstName ? "true" : "false"}
            aria-errormessage="ada-form-last-name-error"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
          <label className="form-label required" htmlFor="ada-form-last-name">
            Last Name
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          {errors?.gender && (
            <span id="ada-form-gender-error" className="form-field-error">
              {errors.gender}
            </span>
          )}
          <select
            className="form-field"
            id="ada-form-gender"
            placeholder="Choose one"
            required
            aria-invalid={errors?.gender ? "true" : "false"}
            aria-errormessage="ada-form-gender-error"
            value={gender}
            onChange={(event) => setGender(event.currentTarget.value)}
          >
            {GENDERS.map((gender) => {
              return (
                <option key={gender.id} value={gender.value}>
                  {gender.label}
                </option>
              );
            })}
          </select>
          <label className="form-label required" htmlFor="ada-form-gender">
            Gender
          </label>
        </div>
        <div className="form-field-group">
          <input
            className="form-field"
            id="ada-form-hours"
            type="number"
            placeholder="3"
            min="1"
            max="10"
            value={hours}
            onChange={(event) => setHours(event.currentTarget.valueAsNumber)}
          />
          <label className="form-label" htmlFor="ada-form-hours">
            Hours
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          <input
            className="form-field"
            id="ada-form-email"
            type="email"
            placeholder="john@example.com"
            required
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <label className="form-label required" htmlFor="ada-form-email">
            Email
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          {errors?.password && (
            <span id="ada-form-password-error" className="form-field-error">
              {errors.password}
            </span>
          )}
          <input
            className="form-field"
            id="ada-form-password"
            type="password"
            required
            aria-invalid={errors?.password ? "true" : "false"}
            aria-errormessage="ada-form-password-error"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <label className="form-label required" htmlFor="ada-form-password">
            Password
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <input
          id="ada-form-agree"
          type="checkbox"
          required
          checked={isAgree}
          onChange={(event) => setIsAgree(event.currentTarget.checked)}
        />
        <label className="form-label" htmlFor="ada-form-agree">
          Do you agree with the terms & coditions?
        </label>
      </fieldset>
      <fieldset className="form-field-container">
        <button className="form-submit-button">Join</button>
      </fieldset>
    </form>
  );
}
