import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";

export default function AddUser(props) {
  function onSubmitForm(event) {
    event.preventDefault();
    props.onAddUser();
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username">username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
