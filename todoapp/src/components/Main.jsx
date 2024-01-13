// rednering todos in a state.
// external component

import { useState } from "react";

const Main = ({ isActionVisible }) => {
  const todoList = [
    {
      id: 1,
      name: "Item 1",
      status: false,
    },
    {
      id: 2,
      name: "Item 2",
      status: true,
    },
    {
      id: 3,
      name: "Item 3",
      status: true,
    },
    {
      id: 4,
      name: "Item 4",
      status: false,
    },
    {
      id: 5,
      name: "Item 5",
      status: true,
    },
  ];
  const [todos, setTodos] = useState(todoList);
  const [newItem, setNewItem] = useState("");
  const [isActive, setIsActive] = useState(false);

  // console.log(newItem);
  const handleAdd = (e) => {
    e.preventDefault();
    if (newItem) {
      const newItemss = {
        id: new Date().getTime(),
        name: newItem,
        status: false,
      };
      setTodos([...todos, newItemss]);
      setNewItem("");
    } else {
      console.log("empty text is not allowed");
      // throw new Error("empty text is not allowed");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search");
  };

  const handleCheck = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // Toggle the status
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    });
  };
  return (
    <>
      {!isActionVisible ? (
        <form onSubmit={handleAdd}>
          <input
            className="form-control"
            type="text"
            placeholder="Add New"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </form>
      ) : (
        <form onSubmit={handleSearch}>
          <input className="form-control" type="text" placeholder="Search.." />
        </form>
      )}
      <ul className="list-group mt-4">
        {todos.map((todo, _) => {
          return (
            <li className="list-group-item d-flex" key={todo.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  defaultChecked={isActive}
                  onClick={() => handleCheck(todo.id)}
                />
              </div>
              {todo.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Main;
