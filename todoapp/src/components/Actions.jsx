import React from "react";

const Actions = () => {
  return (
    <>
      <div
        className="bg-success-subtle rounded-1 p-3 d-flex justify-content-between align-items-center"
        style={{ border: "1px solid #dee2e6" }}
      >
        {/* icons */}
        <div className="d-flex gap-2">
          <i className="bi bi-plus-lg"></i>
          <i className="bi bi-search"></i>|<span>3 ietms left</span>
        </div>

        {/* status */}
        <div className="status d-flex gap-2">
          <button className="border bg-transparent" style={{ fontSize: 15 }}>
            All
          </button>
          <button className="border bg-transparent" style={{ fontSize: 15 }}>
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
