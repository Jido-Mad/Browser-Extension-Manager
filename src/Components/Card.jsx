import { useState } from "react";
import Toggle from "./ToggleBtn.jsx";
import Button from "./Button.jsx";

function Card({ logo, name, description, isActive, onToggle }) {
  const [isRemoved, setIsRemoved] = useState(false);

  function handleRemove() {
    setIsRemoved(true);
  }

  return (
    <div
      className={`${
        isRemoved ? "hidden" : "flex"
      } flex-col w-[80%] m-auto md:w-92 h-40 md:h-[200px] p-2 justify-between rounded-2xl border-2 border-[hsl(0,0%,90%)] dark:border-[hsl(225,23%,24%)] bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,25%,17%)]`}
    >
      <div className="flex justify-start flex-nowrap items-top gap-2">
        <img src={logo} alt={`${name} Logo`} className="h-15" />
        <div>
          <h3 className="text-[hsl(227,75%,14%)] dark:text-[hsl(217,61%,90%)] font-bold text-sm sm:text-base ">
            {name}
          </h3>
          <p className="text-[hsl(226,25%,17%)] dark:text-[hsl(217,61%,90%)] text-xs sm:text-base">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <Button onClick={handleRemove} />
        <Toggle isOn={isActive} onToggle={onToggle} />
      </div>
    </div>
  );
}

export default Card;
