import languages from "../../data/languages";

function AppButtons() {
    
    const printButtons = () => {
        return languages.map((curLanguage) => (
            <li className={curLanguage.title} key={curLanguage.id}>{curLanguage.title}</li>
        ))
    }

    return (
        <>
            <ul>
               {printButtons()} 
            </ul>
            
        </>
    )
}

export default AppButtons;