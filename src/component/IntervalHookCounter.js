import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }

  function doSomething() {
    console.log(count)
  }

  useEffect(() => {
    doSomething()
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
	}, [count])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter