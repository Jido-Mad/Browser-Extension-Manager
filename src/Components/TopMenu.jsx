function TopMenu({ filter, setFilter }) {
  const buttons = [
    {
      label: "All",
      onClick: () => setFilter("all"),
    },
    {
      label: "Active",
      onClick: () => setFilter("active"),
    },
    {
      label: "Inactive",
      onClick: () => setFilter("inactive"),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[80%] md:max-w-180 2xl:max-w-275 mx-auto my-5">
      <h1 className="font-bold text-2xl text-black dark:text-white ">
        Extensions List
      </h1>
      <div>
        {buttons.map((button) => (
          <button
            key={button.label}
            onClick={button.onClick}
            className={`py-2 px-4 m-1 rounded-3xl ${
              filter === button.label.toLowerCase()
                ? "bg-red-600 dark:bg-red-400 text-[hsl(200,60%,99%)] dark:text-[hsl(226,25%,17%)]"
                : "bg-[hsl(200,60%,99%)] dark:bg-[hsl(225,23%,24%)] text-[hsl(226,25%,17%)] dark:text-[hsl(217,61%,90%)] cursor-pointer hover:brightness-90 dark:hover:brightness-110"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopMenu;
