'use client'
import React, { useState } from 'react'



const CounterPage = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterPage