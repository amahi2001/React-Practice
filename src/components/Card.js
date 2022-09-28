import "./Card.css";

function Card(props) {
  //taking classname as props and consolidating them
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      {/*allows us to nest other components within this one*/}
      {props.children}
    </div>
  );
}

export default Card;
