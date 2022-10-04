import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from './CourseInput.module.css';
// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     background: ${props => props.invalid ? 'red' : '#ccc'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: lightgreen;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background: salmon;
//   }

//   &.invalid label {
//     border-color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  //check for valid inputs
  const [isValidInput, setIsValidInput] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValidInput &&styles.invalid}`} invalid={!isValidInput}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
