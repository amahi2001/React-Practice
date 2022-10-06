import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import { useState } from "react";

export default function AddUser(props) {
  //error
  const [error, setOnerror] = useState(null);
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
    props.onAdduser(EnteredUserName, EnteredAge);
    if (EnteredUserName.trim().length === 0 || EnteredAge.trim().length === 0) {
      console.log("invalid response");
      setOnerror({ title: "Invalid input", message: "fields can't be empty" });
      return;
    }
    if (+EnteredAge < 1) {
      console.log("invalid response");
      setOnerror({
        title: "Invalid input",
        message: "Age can't be less than 1",
      });
      return;
    }
    console.log(EnteredUserName, EnteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  }

  function close_modal() {
    //closes Error Modal
    setOnerror(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close_modal={close_modal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="username">username</label>
          <input
            value={EnteredUserName}
            onChange={usernameChangeHandler}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (years)</label>
          <input
            value={EnteredAge}
            onChange={ageChangeHandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
