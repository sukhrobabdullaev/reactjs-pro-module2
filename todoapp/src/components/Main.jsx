// rednering todos in a state.
// external component

import { useState } from "react";

const Main = ({ isActionVisible, filteredTodos, setTodos, selectedId }) => {
  const [newItem, setNewItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [hideSearchResult, setHideSearchResult] = useState(false);
  // console.log(newItem);
  console.log(filteredTodos);
  
  const handleAdd = (e) => {
    e.preventDefault();
    if (newItem) {
      const newItemss = {
        id: new Date().getTime(),
        name: newItem,
        status: selectedId == "completed" ? "completed" : "active",
      };
      setTodos([...filteredTodos, newItemss]);
      setNewItem("");
    } else {
      console.log("empty text is not allowed");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const currentSearchTerm = e.target.value;
    setSearchTerm(currentSearchTerm);
    const searchResult = filteredTodos.filter((todo) =>
      todo.name.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
    setTodos(searchResult);
    if (currentSearchTerm === "") {
      setHideSearchResult(true);
      setTimeout(() => {
        setHideSearchResult(false);
      }, 300); // Adjust the duration to match your CSS transition duration
    } else {
      setHideSearchResult(false);
    }
  };

  const handleCheck = (id) => {
    alert("make sure to complete!");
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "active" ? "completed" : "active",
            }
          : todo
      )
    );
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
        <form>
          <input
            className="form-control"
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
      )}
      <ul className="list-group mt-4">
        {filteredTodos.map((todo) => (
          <li className="list-group-item d-flex" key={todo.id}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`flexCheckDefault-${todo.id}`}
                checked={todo.status === "completed"}
                onChange={() => handleCheck(todo.id)}
              />
            </div>
            {todo.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
