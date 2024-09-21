import { useState } from "react"


const Counter = () => {
  const [counter, setCounter] = useState(1)

  const handleOperation = (operation) => {
    if (operation === "+") {
      setCounter(state => state + 1)
    } else {
      if (counter === 0) return
      setCounter(state => state - 1)
    }
  }
  return (
    <div className="d-flex align-items-center my-2 mx-3 gap-3">
      <button onClick={() => handleOperation('+')} className="btn btn-primary">+</button>
      <h1>{counter}</h1>
      <button onClick={() => handleOperation('-')} className="btn btn-primary">-</button>
    </div>
  )
}

export default Counter
