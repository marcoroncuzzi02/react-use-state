import languages from "./languages.js"
import { useState } from "react"

const Main = () => {

    const [showText,setShowText] = useState('')

    return(
        <main >
            <div className="container d-flex flex-column gap-2 ">
            {languages.map( (element) =>{
                return(
            
                    <div className="container row buttons">
                        <button 
                            className=" btn btn-primary" 
                            key={element.id}
                            onClick={() =>{setShowText(element.description)}}>
                                {element.title}
                        </button>
                    </div>
                    
                )
                }
            
            )}
            </div>
            
            <div className="container">
                {showText}
            </div>
        </main>
    )
    
}

export default Main