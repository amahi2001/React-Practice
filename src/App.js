import React from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
function App() {

  const usersList = [{name:'amahi2001', age:20}];   
  return (
    <div>
      <AddUser onAdduser/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
