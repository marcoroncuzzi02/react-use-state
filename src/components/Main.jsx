import languages from "./languages.js"
import { useState } from "react"

const Main = () => {
    // questo usestate è per la visualizzazione al click del testo
    const [showText,setShowText] = useState()
    //questo use state è per il cambiamento di colore al click del bottone
    const [active,setActive] = useState()
    const [title,setTitle] = useState()
    return(
        <main >
            <div className="container d-flex gap-2 ">
            {languages.map( (element) =>{
                return(
            
                    <div className="container row buttons">
                        <button 
                        //qui devo lavorare con una condizione sulla classeName del bottone: 
                        //se clicco il bottone vuol dire che il bottone selezionato (tramite element.id) prende lo use state active, 
                        //e se il bottone ha use state active allora prenderà la classe "btn-warning"
                        //con i ":" imposto la logica "else", cioè dico ALTRIMENTI il bottone prende la classe btn-primary
                            className={active === element.id ? "btn btn-warning" : "btn btn-primary"}
                            key={element.id}
                            onClick={() =>{
                                setShowText(element.description), 
                                setActive(element.id)
                                setTitle(element.title)
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
                <h3>
                    {title}
                </h3>
                <span>
                    {showText}
                </span>
            </div>
        </main>
    )
    
}

export default Main