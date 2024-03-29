import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  // creating hooks for further values
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      {/* frontend part  */}
      <div className="addUser">
        <h1>Todo-List with React & Redux</h1>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
        className="btn btn-primary"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <>
              <div>
                {/* for new user & username creation */}
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                <input
                  type="text"
                  placeholder="New Username..."
                  onChange={(event) => {
                    setNewUsername(event.target.value);
                  }}
                />
                {/* for updating username */}
                <button className="btn btn-secondary"
                  onClick={() => {
                    dispatch(
                      updateUsername({ id: user.id, username: newUsername })
                    );
                  }}
                >
                  Update Username
                </button>
                {/* for deleting username */}
                <button
                className="btn btn-danger btnsp"
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete User
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
