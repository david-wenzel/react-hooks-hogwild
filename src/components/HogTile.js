import { useState } from "react"
import HogDetails from "./HogDetails"

function HogTile({hog}){

    const [visibleDetails, setVisibleDetails] = useState(false)
    
    function handleClick(){
        setVisibleDetails(!visibleDetails)
    }

    return(
        <div>
             <h1>{hog.name}</h1>
             <img onClick={handleClick} height='400' width='500' src={hog.image}></img>
             { visibleDetails ? <div><HogDetails hog={hog}/></div> : "" }
        </div>
    )
}

export default HogTile