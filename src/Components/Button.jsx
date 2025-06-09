function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer border-2 border-[hsl(217,61%,90%)] bg-[hsl(200,60%,99%)] px-5 py-1 text-[hsl(226,25%,17%)] hover:brightness-96 active:bg-red-600 active:text-[hsl(200,60%,99%)] rounded-2xl dark:border-white dark:bg-[hsl(225,23%,24%)] dark:text-[hsl(217,61%,90%)] dark:hover:brightness-110 dark:active:bg-red-400"
    >
      Remove
    </button>
  );
}

export default Button;
