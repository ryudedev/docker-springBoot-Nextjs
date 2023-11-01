import React, {useEffect, useState} from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:8080/users");
      const users = await response.json();
      setUsers(users);
    }
    fetchUsers();
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
