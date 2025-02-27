import languages from "./languages.js"
import { useState } from "react"

const Main = () => {

    const [showText,setShowText] = useState('')
    const [active,setActive] = useState()

    return(
        <main >
            <div className="container d-flex gap-2 ">
            {languages.map( (element) =>{
                return(
            
                    <div className="container row buttons">
                        <button 
                            className={active === element.id ? "btn btn-warning" : "btn btn-primary"}
                            key={element.id}
                            onClick={() =>{
                                setShowText(element.description), 
                                setActive(element.id)
                            }}
                        >
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