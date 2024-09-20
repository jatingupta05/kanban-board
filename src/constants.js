//status
import done from "./assets/Done.svg";
import todo from "./assets/To-do.svg";
import backlog from "./assets/Backlog.svg";
import inprogress from "./assets/in-progress.svg";
import cancel from "./assets/Cancelled.svg";

//priority
import no from "./assets/No-priority.svg";
import urgent from "./assets/SVG - Urgent Priority colour.svg";
import high from "./assets/Img - High Priority.svg";
import medium from "./assets/Img - Medium Priority.svg";
import low from "./assets/Img - Low Priority.svg";

export const ICONS = {
    status: {
        "Todo" : todo,
        "In progress": inprogress,
        "Done": done,
        "Backlog": backlog,
        "Cancelled": cancel
    },
    priority: {
        0 : no,
        1 : low,
        2 : medium,
        3 : high,
        4 : urgent
    },
}