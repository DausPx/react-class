import { useEffect, useState } from "react"
import { API } from "../api"

function Quote(props) {
    const [quote, setQuote] = useState({})

    // useEffect(()=>{
    //     API.get('random').then((result)=>{
    //         console.log(result.data)
    //         setQuote(result.data)
    //     }).catch(()=>{

    //     })
    // },[])
    useEffect(()=>{
        const fetchQoute = async () =>{
            try {
                const result = await API.get('random')
                setQuote(result.data)
            } catch (error) {
                
            }
        }
        fetchQoute()
    },[])

    // const fetchQoute = useCallback(async ()=>{
    //     try {
    //         const result = await API.get('random')
    //         return result.data
    //     } catch (error) {
            
    //     }
    // },[])

    // useEffect(()=>{
    //     fetchQoute().then((data)=>{
    //         setQuote(data)
    //     }
    //     )
        
    // },[])

    return (<div>
        <p>{quote.content}</p>
        <p>{quote.author}</p>
    </div>)
}
export default Quote