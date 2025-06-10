function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="bg-[hsl(200,60%,99%)] dark:bg-[hsl(226,25%,17%)] flex items-center justify-between max-w-[80%] md:max-w-180 2xl:max-w-275 mx-auto rounded-2xl p-2 mt-5">
      <div className="flex items-center gap-2">
        <img src="./images/Logo-light.png" alt="manager logo" />
        <h1 className="font-bold text-2xl text-gray-800 dark:text-white">
          Extensions
        </h1>
      </div>
      <button onClick={toggleDarkMode}>
        <img
          src={isDarkMode ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
          alt="current Theme logo"
          className="bg-[hsl(200,60%,93%)] dark:bg-[hsl(225,23%,24%)] text-[hsl(226,25%,17%)] dark:text-[hsl(217,61%,90%)] p-3 m-1 rounded-xl cursor-pointer hover:brightness-95 dark:hover:brightness-110"
        />
      </button>
    </div>
  );
}

export default Header;
