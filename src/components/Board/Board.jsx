import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Column from "../Column/Column"; // New component for columns
import { ICONS } from "../../constants";
import { groupTickets, sortTickets, getUserName, defaultStatuses, getPriorityLabel } from "../../utils"; // Import helper functions
import "./Board.css";
import add from "../../assets/add.svg";
import menu from "../../assets/3 dot menu.svg";

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState("status");
  const [orderingOption, setOrderingOption] = useState("title");

  // Fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Group and sort tickets based on the options
  let groupedTickets = groupTickets(tickets, groupingOption, (userId) => getUserName(users, userId));
  groupedTickets = sortTickets(groupedTickets, orderingOption);

  // Render columns
  const renderColumns = (groupingOption) => {
    const groups = groupingOption === "status" ? defaultStatuses : Object.keys(groupedTickets);

    return groups.map((group, index) => {
      const ticketsInGroup = groupedTickets[group] || [];
      const groupLabel = groupingOption === "priority" ? getPriorityLabel(group) : group;

      return (
        <Column
          key={index}
          title={groupLabel}
          tickets={ticketsInGroup}
          icon={ICONS[groupingOption]?.[group]}
          addIcon={add}
          menuIcon={menu}
          getUserName={(userId) => getUserName(users, userId)}
        />
      );
    });
  };

  return (
    <div className="kanban-board">
      <Header setGroupingOption={setGroupingOption} setOrderingOption={setOrderingOption} />
      <div className="board">{renderColumns(groupingOption)}</div>
    </div>
  );
};

export default Board;