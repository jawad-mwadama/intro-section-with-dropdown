import todoIcon from "./assets/images/icon-todo.svg";
import calendar from "./assets/images/icon-calendar.svg";
import reminders from "./assets/images/icon-reminders.svg";
import planning from "./assets/images/icon-planning.svg";

export const navLinks = [
  {
    label: "Features",
    dropDownItems: [
      {
        label: "Todo List",
        path: "/features/todo-list",
        icon: todoIcon,
      },
      {
        label: "Calender",
        path: "/features/calendar",
        icon: calendar,
      },
      {
        label: "Reminders",
        path: "/features/reminders",
        icon: reminders,
      },
      {
        label: "Planning",
        path: "/features/planning",
        icon: planning,
      },
    ],
  },
  {
    label: "Company",
    dropDownItems: [
      {
        label: "History",
        path: "/company/history",
      },
      {
        label: "Our Team",
        path: "/company/team",
      },
      {
        label: "Blog",
        path: "/company/blog",
      },
    ],
  },
  {
    label: "Careers",
    path: "/careers",
  },
  {
    label: "About",
    path: "/about",
  },
];
