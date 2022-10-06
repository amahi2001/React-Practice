import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import { useState, useRef } from "react";

export default function AddUser(props) {

  //age and name refs
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //error
  const [error, setOnError] = useState(null);
  // //username
  // const [EnteredUserName, setEnteredUserName] = useState("");
  // function usernameChangeHandler(event) {
  //   setEnteredUserName(event.target.value);
  // }
  // //age
  // const [EnteredAge, setEnteredAge] = useState("");
  // function ageChangeHandler(event) {
  //   setEnteredAge(event.target.value);
  // }

   function onSubmitForm(event) {
    //submitting form to add user
    event.preventDefault();

    //saving values from ref
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    
    props.onAdduser(enteredName, enteredAge);
    
    
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("invalid response");
      setOnError({ title: "Invalid input", message: "fields can't be empty" });
      return;
    }
    if (+enteredAge < 1) {
      console.log("invalid response");
      setOnError({
        title: "Invalid input",
        message: "Age can't be less than 1",
      });
      return;
    }
    console.log(enteredName, enteredAge);
    //resetting values for refs
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  function closeModal() {
    //closes Error Modal
    setOnError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close_modal={closeModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="username">username</label>
          <input
            // value={EnteredUserName}
            // onChange={usernameChangeHandler}
            id="username"
            type="text"
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            // value={EnteredAge}
            // onChange={ageChangeHandler}
            id="age"
            type="number"
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
