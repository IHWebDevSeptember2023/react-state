import { useState } from "react";

function ClassChange() {
    const [color, setColor] = useState("blue")

    return (
        <div>
            <button onClick={()=> color === "blue" ? setColor("green") : setColor("blue")} className={color}>Hello color</button>
            <input type="text" onChange={(event)=> console.log(event.target.value)} />
        </div>

    )
}

export default ClassChange;