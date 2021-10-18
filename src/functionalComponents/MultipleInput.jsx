import React from "react"
import { useState } from "react/cjs/react.development"

const inputsList = [
    {name: 'text1', type: 'radio'},
    {name: 'text2', type: 'checkbox'},
    {name: 'text3', type: 'text'},
    {name: 'text4', type: 'text'},
]

function MultipleInput(props) {
    const [inputs, setInputs] = useState({})

    function handeChange(e) {
        setInputs({...inputs, [e.target.id]: e.target.value})
    }
    
    return (<div>
        {inputsList.map((inputData)=>{
            return <input type={inputData.type} value={inputs[inputData.name] || ''} id={inputData.name} key={inputData.name} onChange={handeChange} />
        })}
    </div>)
}
export default MultipleInput