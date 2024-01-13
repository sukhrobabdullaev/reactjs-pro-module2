// + icon -> add new input ga focus berishim kerak
// search icon -> search input ga focus bolishi kerak.
// nechta todo borligini korishim kerak. 3 items left.
// All, active va completed buttonlar ga filter.

import { useState } from "react";

const Actions = ({ setIsActionVisible }) => {
  const [selectedId, setSelectedId] = useState(false);
  return (
    <>
      <div
        className="bg-success-subtle rounded-1 p-3 d-flex justify-content-between align-items-center"
        style={{ border: "1px solid #dee2e6" }}
      >
        {/* icons */}
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setIsActionVisible(false)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setIsActionVisible(true)}
          >
            <i className="bi bi-search cursor-pointer"></i>
          </button>
          |<span>3 ietms left</span>
        </div>

        {/* status */}
        <div className="status d-flex gap-2">
          <button
            onClick={() => setSelectedId(true)}
            className={!selectedId && `border-1 bg-transparent`}
            style={{ fontSize: 15 }}
          >
            All
          </button>
          <button
            onClick={() => setSelectedId(true)}
            className={!selectedId && `border-1 bg-transparent`}
            style={{ fontSize: 15 }}
          >
            Active
          </button>
          <button className="border bg-transparent" style={{ fontSize: 15 }}>
            Completed
          </button>
        </div>
      </div>
      <span className="text-center d-block">
        press <code>Esc</code> to Cancel
      </span>
    </>
  );
};

export default Actions;
