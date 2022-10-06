import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "./Button";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.close_modal} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions} onClick={props.close_modal}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
