import { useState } from "react"
import './Counter.scss'

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  )
}