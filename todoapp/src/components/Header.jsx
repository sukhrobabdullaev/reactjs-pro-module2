import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="text-center mb-0 bg-danger-subtle mb-1 border text-light">ToDo App</h1>
      <p className="bg-success p-2  bg-opacity-75" style={{fontSize: 14}}>
        Ushbu saytimizdan foydalanib, kuningizni samarali vazifalar bilan
        o'tkazing!
      </p>
    </div>
  );
};

export default Header;
