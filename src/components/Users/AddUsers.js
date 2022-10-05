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
    if(EnteredUserName.trim().length===0 || EnteredAge.trim().length===0){
        console.log('invalid response');
        return;
    }
    if(+EnteredAge < 1 ){
        console.log('invalid response');
        return;
    }
    console.log(EnteredUserName, EnteredAge);
    setEnteredAge('')
    setEnteredUserName('')
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username">username</label>
        <input value={EnteredUserName} onChange={usernameChangeHandler} id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input value={EnteredAge} onChange={ageChangeHandler} id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
