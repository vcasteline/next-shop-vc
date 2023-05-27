function Button({ type, onClick, children }) {
    return (
      <button type={type} onClick={onClick}
        className="bg-black text-gray-100 rounded px-4 py-2 my-7
          hover:bg-white hover:text-black border border-white ">
        {children}
      </button>
    )
  }
  
  export default Button;