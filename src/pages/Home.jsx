import React from "react";
import { Link } from "react-router-dom";

const modules = [
  { id: "module1", title: "Introduction to Java and Its Ecosystem" },
  { id: "module2", title: "Java Basics" },
  { id: "module3", title: "Control Statements" },
  { id: "module4", title: "Arrays in Java" },
  { id: "module5", title: "Strings in Java" },
  { id: "module6", title: "Classes and Objects" },
  { id: "module7", title: "Object-Oriented Programming" },
  { id: "module8", title: "Advanced Java Features" }
];

const Home = () => {
  return (
    <div className="home">
      <h1>Study Mate - Java Notes</h1>
      <ul>
        {modules.map((module) => (
          <li key={module.id}>
            <Link to={`/module/${module.id}`}>{module.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
