
import React from "react";
import Card from "../Card/Card";
import { getUserInitials, getUserImage } from "../../utils"; // Import helper functions
import "./Column.css";

const Column = ({ title, tickets, icon, addIcon, menuIcon, users }) => (
  <div className="kanban-column">
    <div className="column-title">
      <div className="flex-box">
        {icon && <img src={icon} alt={`${title} icon`} />}
        <p>{title}</p>
        <p>{tickets.length}</p>
      </div>
      <div className="flex-box">
        <img src={addIcon} alt="add-icon" />
        <img src={menuIcon} alt="menu-icon" />
      </div>
    </div>
    {tickets.map((ticket) => (
      <Card
        key={ticket.id}
        id={ticket.id}
        title={ticket.title}
        priority={ticket.priority}
        status={ticket.status}
        tag={ticket.tag}
        userInitials={getUserInitials(ticket.userId, users)} // Use imported helper function
        userImageUrl={getUserImage(ticket.userId, users)}    // Use imported helper function
      />
    ))}
  </div>
);

export default Column;
