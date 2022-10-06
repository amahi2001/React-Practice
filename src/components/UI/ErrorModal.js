import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "./Button";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.close_modal} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop close_modal={props.close_modal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          close_modal={props.close_modal}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
