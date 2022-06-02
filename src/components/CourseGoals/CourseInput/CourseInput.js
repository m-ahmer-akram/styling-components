import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.scss";
// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "#fff")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background-color: ${(props) => (props.invalid ? "#f88" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     border-radius: 10px;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   // &.invalid input {
//   //   border-color: red;
//   //   background-color: #f88;
//   // }

//   // &.invalid label {
//   //   color: red;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/* <FormControl className={!isValid && "invalid"}> */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* <label style={{ color: !isValid ? "red" : "" }}>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          style={{
            borderColor: !isValid ? "red" : "",
            background: !isValid ? "#f88" : "",
          }}
        /> */}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
        {/* </div> */}
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
