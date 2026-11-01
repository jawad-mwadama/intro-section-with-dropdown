//import React from "react";
import logo from "../assets/images/logo.svg";
//import todoIcon from "../assets/images/icon-todo.svg";

// const navLinks = [
//   {
//     label: "Features",
//     dropDownItems: [
//       {
//         label: "Todo List",
//         path: "/features/todo-list",
//         icon: todoIcon,
//       },
//     ],
//   },
//   {
//     label: "Company",
//     dropDownItems: [
//       {
//         label: "History",
//         path: "/company/history",
//       },
//       {
//         label: "Our Team",
//         path: "/company/team",
//       },
//       {
//         label: "Blog",
//         path: "/company/blog",
//       },
//     ],
//   },
//   {
//     label: "Careers",
//     path: "/careers",
//   },
//   {
//     label: "About",
//     path: "/about",
//   },
// ];

// function Navbar() {
//   return (
//     <div className="flex items-center">
//       <img src={logo} alt="logo" />

//       <nav className="flex gap-6 border border-black text-black">
//         {navLinks.map((navLink) => (
//           <div key={navLink.label}>
//             {navLink.dropDownItems ? (
//               <div>
//                 <button>{navLink.label}</button>

//                 <ul>
//                   {navLink.dropDownItems.map((item) => (
//                     <li key={item.label}>
//                       <a href={item.path}>
//                         {item.icon && <img src={item.icon} alt="" />}
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : (
//               <a href={navLink.path}>{navLink.label}</a>
//             )}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// }

function Navbar() {
  return (
    <nav>
      <div className="m-8 flex items-center justify-between">
        <div className="flex gap-12">
          <img src={logo} alt="/" />
          <ul className="flex gap-8">
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <a href="/login">Login</a>
          <span className="rounded-lg border-2 border-black p-2">
            <button>Register</button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
