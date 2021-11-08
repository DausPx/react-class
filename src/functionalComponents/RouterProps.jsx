import { useLocation, useParams } from "react-router"
import {  } from "history"

 function RouterProps(props) {
     const {id} = useParams()
     const navigate = useLocation()
     console.log(navigate)

     if(id === "1"){
         return <div>1</div>
     }
    return  <div>2</div>

     
 }
 export default RouterProps