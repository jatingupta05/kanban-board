import React from "react";
import "./Card.css";
import urgent from "../../assets/SVG - Urgent Priority grey.svg";
import high from "../../assets/Img - High Priority.svg";
import medium from "../../assets/Img - Medium Priority.svg";
import low from "../../assets/Img - Low Priority.svg";
import no from "../../assets/No-priority.svg";
import cancel from "../../assets/Cancelled.svg";
import UserAvatar from "../UserAvatar/UserAvatar"; // Import UserAvatar

const Card = ({ id, title, priority, tag, userInitials, userImageUrl }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return urgent;
      case 3:
        return high;
      case 2:
        return medium;
      case 1:
        return low;
      case 0:
        return no;
      default:
        return cancel;
    }
  };

  return (
    <div className="card">
      <div className="flex-box">
        <p className="heading">{id}</p>
        <div className="user-assigned">
          <UserAvatar initials={userInitials} userImageUrl={userImageUrl} />
        </div>
      </div>
      
      <p className="sub-heading">{title}</p>
      <div className="container">
        <img src={getPriorityIcon(priority)} alt="priority" width={20} />
        <div className="feature">
          <div className="grey-circle"></div>
          <p className="tag">{tag[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;