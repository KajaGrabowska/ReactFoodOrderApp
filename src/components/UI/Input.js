import React from 'react';

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

// {...props.input} spread operator, this ensures that all key value pairs in 
//this input object are added as props to the input element
