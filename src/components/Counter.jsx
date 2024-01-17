import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    console.log("Se ha montado el componente COUNTER");

    function handleSayHi() {
        console.log("HI!");
    }

    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h2>The number is: {count}</h2>
            <button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>-</button>
            <button onClick={()=> handleSayHi()}>SAY HI IN THE CONSOLE</button>
        </>
    )
}

export default Counter;
