import { useState } from "react";
import data from "./data.json";
import Header from "./Components/Header.jsx";
import TopMenu from "./Components/TopMenu.jsx";
import Card from "./Components/Card.jsx";
import Attribution from "./Components/Attribution";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [extensionStates, setExtensionStates] = useState(
    data.map((card) => ({ id: card.id, isActive: false }))
  );
  const [filter, setFilter] = useState("all");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleToggle = (id) => {
    setExtensionStates((prev) =>
      prev.map((state) =>
        state.id === id ? { ...state, isActive: !state.isActive } : state
      )
    );
  };

  const filteredExtensions = data.filter((card) => {
    const state = extensionStates.find((s) => s.id === card.id);
    if (filter === "active") return state.isActive;
    if (filter === "inactive") return !state.isActive;
    return true;
  });

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } bg-[linear-gradient(180deg,#EBF2FC_0%,#EEF8F9_100%)] dark:bg-[linear-gradient(180deg,#040918_0%,#091540_100%)] min-h-screen overflow-auto`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <TopMenu filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center w-fit gap-2 m-auto">
        {filteredExtensions.map((card) => (
          <Card
            key={card.id}
            logo={card.logo}
            name={card.name}
            description={card.description}
            isActive={extensionStates.find((s) => s.id === card.id).isActive}
            onToggle={() => handleToggle(card.id)}
          />
        ))}
      </div>
      <Attribution />
    </div>
  );
}

export default App;
