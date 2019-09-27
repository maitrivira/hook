import React, {useState, useEffect} from 'react'

function HookCounter(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating Document Title')
        document.title = `You Clicked ${count} times`
    }, [count])

    return(
        <div>
            <text>useEffect after render</text><br/><br/>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounter;