import { useState } from 'react'

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue || 0)

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '200px',
        justifyContent: 'space-between',
      }}
    >
      <span>{count}</span>
      <button onClick={e => setCount(count + 1)}>Add 1</button>
    </div>
  )
}

export default Counter
