import { useState } from "react";

export const DirivedState=()=>{
    const[users,setUsers]=useState([
        {name:"Alice",age:25},
        {name:"Bob",age:30},
        {name:"Chatlie",age:35},
        {name:"alina",age:25},
    ]);

    //Derived state: count of users
    console.log(users);
    const userCount=users.length;

    //derived state: average age of users
    const averageAge=
    users.reduce((accum,curElem) => accum+curElem.age,0)/userCount;

  return(
     <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <p>Total Users: {userCount}</p>
      <p>Average Age: {averageAge}</p>
    </div>
  )
}