import React from "react";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";

export default function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);
  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
