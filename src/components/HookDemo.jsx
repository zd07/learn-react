import React,{useState} from 'react'

const HookDemo = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
    console.log("print");
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
}

export default HookDemo