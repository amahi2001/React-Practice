import Card from "../UI/Card";

import styles from './UsersList.module.css'

export default function UsersList(props) {

  return (
    <Card className = {styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
