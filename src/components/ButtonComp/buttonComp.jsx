const Button = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="border px-4 py-1 m-2 rounded-full border-gray-300 hover:bg-black hover:border-black hover:text-white text-gray-600 hover:transition duration-500">
        {title}
      </button>
    );
  };
  
  export default Button;