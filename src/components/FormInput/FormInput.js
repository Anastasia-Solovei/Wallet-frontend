import React from 'react';
import { ErrorMessage, useField } from 'formik';

import s from '../FormInput/FormInput.module.css';

const FormInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <ErrorMessage className={s.message} component="div" name={field.name} />
      <label htmlFor={field.name}>
        {label}
        <input {...field} {...props} autoComplete="off" />
      </label>
    </div>
  );
};

export default FormInput;
