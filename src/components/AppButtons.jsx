import languages from "../../data/languages";
import {useState} from 'react';

function AppButtons() {
    
    const [selectedCard, setSelectedCard] = useState(null);
       
    const printButtons = () => {
        return languages.map((curLanguage) => (
            <button 
            className={selectedCard && curLanguage.id === selectedCard.id ? "yellow-button" : "blue-button"} 
            key={curLanguage.id} 
            onClick={() => setSelectedCard(curLanguage)}>
                {curLanguage.title}
            </button>
        ));
    };

    return (
        <>
            <div className="row">
               {printButtons()} 
            </div>          
                {
                    selectedCard !== null ? (
                        <div className="card">
                            <h1 className="card-title">{selectedCard.title}</h1>
                            <p className="info">{selectedCard.description}</p>
                        </div>
                    ) : (
                        <div className="card">
                           <p>Nessun linguaggio selezionato</p> 
                        </div>                        
                    )
                }               
        </>
    );
};

export default AppButtons;