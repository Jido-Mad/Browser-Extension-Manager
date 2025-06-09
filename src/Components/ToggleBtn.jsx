function Toggle({ isOn, onToggle }) {
  return (
    <div
      className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-red-500 dark:bg-red-400" : "bg-gray-300 dark:bg-gray-400"
      }`}
      onClick={onToggle}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}

export default Toggle;
