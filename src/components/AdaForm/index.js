import "./AdaForm.styles.css";

import { GENDERS } from "../../helpers/genders";

export default function AdaForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">Join us today</h2>
      <p className="form-description">
        Please fill the form below to register into our platform.
      </p>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          <input
            className="form-field"
            id="ada-form-first-name"
            type="text"
            placeholder="John"
            required
          />
          <label className="form-label" htmlFor="ada-form-first-name">
            First Name
          </label>
        </div>
        <div className="form-field-group">
          <input
            className="form-field"
            id="ada-form-last-name"
            type="text"
            placeholder="Doe"
            required
          />
          <label className="form-label required" htmlFor="ada-form-last-name">
            Last Name
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          <select
            className="form-field"
            id="ada-form-gender"
            placeholder="Choose one"
            required
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
          />
          <label className="form-label required" htmlFor="ada-form-email">
            Email
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <div className="form-field-group">
          <input
            className="form-field"
            id="ada-form-password"
            type="password"
            required
          />
          <label className="form-label required" htmlFor="ada-form-password">
            Password
          </label>
        </div>
      </fieldset>
      <fieldset className="form-field-container">
        <input id="ada-form-agree" type="checkbox" required />
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
