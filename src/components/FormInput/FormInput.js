import React from 'react';
import { ErrorMessage, useField } from 'formik';

const FormInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: '#FF6596' }}
      />
      <label htmlFor={field.name}>
        {label}
        <input {...field} {...props} autoComplete="off" />
      </label>
    </div>
  );
};

export default FormInput;
