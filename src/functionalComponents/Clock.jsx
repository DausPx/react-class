import React, { useEffect, useState } from "react"

function Clock(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const timerID = setInterval(()=>{
            console.log('nesto')
            tick()
        },1000)

        return () => clearInterval(timerID)
    },[])

    function tick() {
        setTime(new Date().toLocaleTimeString())
    }

    return (        
        <div>
            <h1>Welcome</h1>
            <h2>{time}</h2>
        </div>)
}
export default Clock