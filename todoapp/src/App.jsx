import { useEffect, useState } from "react";
import "./App.css";
import Actions from "./components/Actions";
import Header from "./components/Header";
import Main from "./components/Main";
import { todoList } from "./data";
const App = () => {
  const [todos, setTodos] = useState(todoList);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isActionVisible, setIsActionVisible] = useState(false);
  const [selectedId, setSelectedId] = useState("all");

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);
  console.log(todos);
  return (
    <div className="bg-primary min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div
        className="bg-white rounded-5 shadow-lg"
        style={{ padding: "50px 150px" }}
      >
        <Header />
        <Main
          isActionVisible={isActionVisible}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Actions
          setIsActionVisible={setIsActionVisible}
          todos={todos}
          setFilteredTodos={setFilteredTodos}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </div>
  );
};

export default App;
