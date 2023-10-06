// je crée un dossier context 
// dans ce dossier je crée un fichier compteurContext.jsx 
// Grâce à ce composant que l'on va pouvoir partager des informations sur les composants Quelquesoit leur position dans l'arbre  des composants 
import { createContext , useState } from "react"; // $_SESSION 
// PHP => $_SESSION ne contient que des valeurs 
// en Javascript // valeurs ET fonctions (traitement associés à cette valeur )
// créer le context  => $_SESSION
export const CompteurContext = createContext();
// provider du context => où je veux pouvoir utiliser cette $_SESSION
export function CompteurContextProvider ({children}){
    const [compteur, setCompteur]  = useState(0);
    // utiliser compteur dans le composant C
    // setCompteur dans le composant B 
    return <CompteurContext.Provider value={{compteur , setCompteur}}>
            {children}
    </CompteurContext.Provider>
}