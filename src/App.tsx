import React from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="kanban-board-container">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default App;
