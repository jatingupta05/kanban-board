import React, { useState } from "react";
import "./Header.css";
import display from "../../assets/Display.svg";
import down from "../../assets/down.svg";

const Header = ({ setGroupingOption, setOrderingOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle grouping change
  const handleGroupingChange = (e) => {
    setGroupingOption(e.target.value); // Pass the selected grouping option to parent
  };

  // Handle ordering change
  const handleOrderingChange = (e) => {
    setOrderingOption(e.target.value); // Pass the selected ordering option to parent
  };

  return (
    <div className="header">
      <div
        className="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={display} alt="display" />
        <p>Display</p>
        <img src={down} alt="down-icon" />
      </div>
      
      {isOpen && (
        <div className="display-container">
          {/* Grouping option */}
          <div className="flex-box">
            <p>Grouping :</p>
            <select name="grouping" onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          {/* Ordering option */}
          <div className="flex-box">
            <p>Ordering :</p>
            <select name="ordering" onChange={handleOrderingChange}>
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;