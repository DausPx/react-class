import { useState } from 'react/cjs/react.development'
import './simple.css'
function Simple() {
    const [isDark, setIsDark] = useState(false)

    function onClick() {
        setIsDark(!isDark)
    }
    
    return <div className={`${isDark ? 'containerDark' : 'container'}`}>
        <p className={`container ${isDark ? 'dark' : ''}`}>Random text</p>
        <button onClick={onClick} className={`container ${isDark ? 'dark' : ''}`}>Click</button>
    </div>
}
export default Simple