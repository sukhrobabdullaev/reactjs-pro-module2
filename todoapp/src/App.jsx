import "./App.css";
import Actions from "./components/Actions";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bg-primary min-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div
        className="bg-white rounded-5 shadow-lg"
        style={{ padding: "50px 150px" }}
      >
        <Header />
        <Main />
        <Actions />
      </div>
    </div>
  );
};

export default App;
