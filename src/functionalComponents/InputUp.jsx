import { useState } from "react/cjs/react.development"

function InputUp({defaultValue, className, onChange, style }) {

    return (
    <>
        <input type='text' value={defaultValue} onChange={onChange} className={`primary borderless ${className}`} style={style}/>
    </>)
}
export default InputUp