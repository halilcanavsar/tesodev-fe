import './AddLinkPage.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AddLinkPage = () => {
  const [errors, setErrors] = useState(false);

  const [values, setValues] = useState({
    nameSurname: '',
    country: '',
    city: '',
    email: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'nameSurname',
      type: 'text',
      placeholder: 'Enter name and surname',
      errorMessage:
        'Name and surname should contain at least 2 words and starts with a capital letter',
      label: 'Name and surname',
      pattern: '^[A-Z][a-z]*(\\s[A-Z][a-z]*)+$',
      required: true,
    },
    {
      id: 2,
      name: 'country',
      type: 'text',
      placeholder: 'Enter a country',
      label: 'Country',
      required: true,
    },
    {
      id: 3,
      name: 'city',
      type: 'text',
      placeholder: 'Enter a city',
      label: 'City',
      required: true,
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      placeholder: 'Enter an e-mail (abc@xyz.com)',
      errorMessage: 'E-mail format should be (abc@xyz.com)',
      label: 'E-mail',
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //if form is not valid and because of that if it's not submitting then show error messages

  //if all the inputs filled make add button active
  const isActive = () => {
    let isActive = true;
    inputs.forEach((input) => {
      if (!values[input.name]) {
        isActive = false;
      }
    });
    return isActive;
  };

  //if add button is clicked and inputs are not valid then show error message

  return (
    <div className="add-link-page">
      <div className="logo">
        <img
          src={require('../../assets/images/header-logo.jpg')}
          alt=""
          className="logo"
        />
        <NavLink
          to={{
            pathname: '/listpage',
          }}
          state={{ text: '' }}
        >
          <div className="form-return">↩ Return to List Page</div>
        </NavLink>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div className="form-input">
              <label className="labels" htmlFor={input.id}>
                {input.label}
              </label>
              <input
                id={input.id}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleChange}
                value={values[input.name]}
                pattern={input.pattern}
                required={input.required}
                onInvalid={() => setErrors(true)}
              />
              <span className="error-message-red">
                {errors &&
                  values[input.name] &&
                  !values[input.name].match(input.pattern) &&
                  input.errorMessage}
              </span>
            </div>
          ))}
          <button type="submit" className="add-button" disabled={!isActive()}>
            Add
          </button>
        </form>
      </div>

      <div className={errors ? 'error-message' : 'error-message-hidden'}>
        {errors ? (
          <div className="error-message-text">
            <strong>Error while adding link element</strong>
            <br />
            <ul>
              <li>
                Name and surname should contain at least 2 words and starts with
                a capital letter
              </li>
              <li>E-mail format should be (abc@xyz.com)</li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AddLinkPage;
