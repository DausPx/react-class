import React, { useState } from "react"

function ClickableF(params) {
    const [count, setCount] = useState(0)
    
    function onClik(e) {
        console.log(e)
        setCount(count+1)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={onClik}>CLik F</button>
            <div style={{width: '100px', height: '50px'}} onClick={onClik} defaultValue='vrednost' />
        </div>
    )
}
export default ClickableF