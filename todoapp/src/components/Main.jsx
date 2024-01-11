import React from "react";

const Main = () => {
  return (
    <>
      <form>
        <input className="form-control" type="text" placeholder="Add New" />
      </form>
      <ul className="list-group mt-4">
        <li className="list-group-item d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          An item
        </li>
        <li className="list-group-item d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          A second item
        </li>
        <li className="list-group-item d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          A third item
        </li>
        <li  className="list-group-item d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          A fourth item
        </li>
        <li className="list-group-item d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          And a fifth one
        </li>
      </ul>
    </>
  );
};

export default Main;
