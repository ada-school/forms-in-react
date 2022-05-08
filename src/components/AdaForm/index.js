import { useForm } from "react-hook-form";

import "./AdaForm.styles.css";
import { GENDERS } from "../../helpers/genders";
import { validateEmail, validatePassword } from "../../helpers/validators";

export default function AdaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log("form submitted");
    console.log("form data: ", formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Join us today</h2>
      <p className="form-description">
        Please fill the form below to register into our platform.
      </p>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          {errors?.firstName && (
            <span id="ada-form-first-name-error" className="form-field-error">
              First name is too long.
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
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <label className="form-label" htmlFor="ada-form-first-name">
            First Name
          </label>
        </div>
        <div className="form-field-group">
          {errors?.lastName && (
            <span id="ada-form-last-name-error" className="form-field-error">
              Last name is too long.
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
            {...register("lastName", { required: true, maxLength: 20 })}
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
              Please choose a gender.
            </span>
          )}
          <select
            className="form-field"
            id="ada-form-gender"
            placeholder="Choose one"
            required
            aria-invalid={errors?.gender ? "true" : "false"}
            aria-errormessage="ada-form-gender-error"
            {...register("gender", {
              required: true,
              validate: (gender) => !!gender && gender !== "Select one",
            })}
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
            {...register("hours", { required: false })}
          />
          <label className="form-label" htmlFor="ada-form-hours">
            Hours
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          {errors?.email && (
            <span id="ada-form-email-error" className="form-field-error">
              Invalid email.
            </span>
          )}
          <input
            className="form-field"
            id="ada-form-email"
            type="email"
            placeholder="john@example.com"
            required
            aria-invalid={errors?.email ? "true" : "false"}
            aria-errormessage="ada-form-email-error"
            {...register("email", {
              required: true,
              validate: (email) => validateEmail(email),
            })}
          />
          <label className="form-label required" htmlFor="ada-form-email">
            Email
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          {errors?.password && (
            <span id="ada-form-email-error" className="form-field-error">
              Your password must contain at least 8 and must include at least
              one numeric character with at least one uppercase and lowercase
              letter.
            </span>
          )}
          <input
            className="form-field"
            id="ada-form-password"
            type="password"
            required
            {...register("password", {
              required: true,
              validate: (password) => validatePassword(password),
            })}
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
          {...register("isAgree", { required: true })}
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
