import React from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setusersList] = useState([
    { id: Math.random().toString(), name: "amahi2001", age: 20 },
  ]);

  function add_user(u_name, u_age) {
    setusersList((prevState) => {
      return [
        { id: Math.random().toString(), name: u_name, age: u_age },
        ...prevState,
      ];
    });
  }
  return (
    <div>
      <AddUser onAdduser={add_user} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
