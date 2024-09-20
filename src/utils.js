

// Helper function to get user initials by userId
export const getUserInitials = (userId, users = []) => {
    if (!Array.isArray(users)) return "NA";
    const user = users.find((user) => user.id === userId);
    return user ? user.initials : "NA";
  };
  
  // Helper function to get user image URL by userId
  export const getUserImage = (userId, users = []) => {
    if (!Array.isArray(users)) return null;
    const user = users.find((user) => user.id === userId);
    return user ? user.imageUrl : null;
  };
  
  // Other helper functions remain the same...
  
  // Helper function to group tickets by the selected grouping option
  export const groupTickets = (tickets, option, getUserName) => {
    return tickets.reduce((acc, ticket) => {
      const groupKey = option === "user" ? getUserName(ticket.userId) 
                        : option === "priority" ? ticket.priority 
                        : ticket.status;
      
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(ticket);
      return acc;
    }, {});
  };
  
  // Helper function to sort tickets based on the ordering option
  export const sortTickets = (groupedTickets, orderingOption) => {
    Object.keys(groupedTickets).forEach((group) => {
      groupedTickets[group].sort((a, b) => {
        return orderingOption === "title"
          ? a.title.localeCompare(b.title)
          : a.priority - b.priority;
      });
    });
    return groupedTickets;
  };
  
  // Helper function to get user name by ID
  export const getUserName = (users, userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unassigned";
  };
  
  // Default statuses for the Kanban board
  export const defaultStatuses = [
    "Todo",
    "In progress",
    "Done",
    "Backlog",
    "Cancelled",
  ];
  
  // Helper function to get the priority label based on priority value
  export const getPriorityLabel = (priority) => {
    const priorityLabels = {
      0: "No Priority",
      1: "Low",
      2: "Medium",
      3: "High",
      4: "Urgent",
    };
    return priorityLabels[priority];
  };