import { useState } from "react"

function Input(props) {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    function onChange(e) {
        const value = e.target.value

        setText(value)
    }
    
    function onEmailChange(e) {
        const value = e.target.value

        setEmail(value)
    }

    function onClick() {
        if(text.length > 10){
            setError('Your input text must less then 10 chars')
        }
        
        if(email.length < 4){
            setError('Your email must be more than 4 chars')
        }
    }

    return (
        <div>
            {error && (<p>{error}</p>)}
            <input  type='text' value={text} onChange={onChange}/>
            <input type='email' value={email} onChange={onEmailChange} />
            <button onClick={onClick}>Submit</button>
        </div>
    )
    
}
export default Input