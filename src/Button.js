import React from "react";

const Button = ({ symbol, propfunc }) => {
  return (
    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
      <div
        className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
        onClick={() => propfunc(`${symbol}`)}
      >
        {symbol}
      </div>
    </div>
  );
};

export default Button;
