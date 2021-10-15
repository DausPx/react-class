import { useState } from "react"

function Input(props) {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState([])

    function onChange(e) {
        const value = e.target.value

        setText(value)
    }
    
    function onEmailChange(e) {
        const value = e.target.value

        setEmail(value)
    }

    function onClick() {
        let error1 = []
        if(text.length > 10){
            error1.push(`Your input text must less then 10 chars`)
        }
        
        if(email.length < 4){
            error1.push(`Your email must be more than 4 chars`)
        }
        setError(error1)
    }

    return (
        <div>
            {error.length > 0 && error.map((value, index) => (<p key={index}>{value}</p>))}
            <input  type='text' value={text} onChange={onChange}/>
            <input type='email' value={email} onChange={onEmailChange} />
            <button onClick={onClick}>Submit</button>
        </div>
    )
    
}
export default Input