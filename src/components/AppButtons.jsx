import languages from "../../data/languages";
import {useState} from 'react';

function AppButtons() {
    // const empty = {
    //     id: 0,
    //     title: "nessun linguaggio selezionato",
    //     description: ""
    //   };

    const [viewCard, setViewCard] = useState(languages[0]);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClick = (curLanguage) => {
        setSelectedCard(curLanguage.id);
        setViewCard(curLanguage);

    }
    
    const printButtons = () => {
        return languages.map((curLanguage) => (
            <button 
            className={selectedCard === curLanguage.id ? "yellow-button" : "blue-button"} 
            key={curLanguage.id} 
            onClick={() => handleClick(curLanguage)}>
                {curLanguage.title}
            </button>
        ));
    };

    return (
        <>
            <div className="row">
               {printButtons()} 
            </div>            
            <div className="card">
                <h1 className="card-title">{viewCard.title}</h1>
                <p className="info">{viewCard.description}</p>
            </div>            
        </>
    );
};

export default AppButtons;