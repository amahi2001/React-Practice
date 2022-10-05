import styles from './Card.module.css'
 

export default function Card(props) {

  return (
    // lets us use custom class names along with ones assigned
    <div className={`${styles.card} ${props.className}`}>
      {/* will output the contents of whatever jsx/html elements between the card component */}
      {props.children}
    </div>
  );
}
