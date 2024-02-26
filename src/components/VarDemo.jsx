import React from "react";

const VarDemo = () => {
  let count = 0;

  // Function to increment the count
  const increment = () => {
    // Updating the value of count
    count += 1; // This change won't trigger a re-render
  };
  console.log("print");
  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to trigger the increment function */}
      <button onClick={increment}>Increment the count --</button>
    </div>
  );
};

export default VarDemo;
