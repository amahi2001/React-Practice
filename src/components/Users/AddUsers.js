import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

import { useState } from "react";

export default function AddUser(props) {
  //username
  const [EnteredUserName, setEnteredUserName] = useState("");
  function usernameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }
  //age
  const [EnteredAge, setEnteredAge] = useState("");
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function onSubmitForm(event) {
    //submitting form to add user
    event.preventDefault();
    // props.onAddUser();
    console.log(EnteredUserName, EnteredAge);
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username">username</label>
        <input onChange={usernameChangeHandler} id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input onChange={ageChangeHandler} id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
