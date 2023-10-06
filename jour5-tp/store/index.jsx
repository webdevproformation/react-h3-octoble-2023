import { Provider } from "react-redux"
import { compteurReducer } from "../reducer/compteurReducer"
import { configureStore } from "@reduxjs/toolkit"

import logger from "redux-logger"

const store = configureStore({ 
        reducer : { compteur : compteurReducer },
        middleware : [logger]
    })

function Store({children}) {
    return ( <Provider store={store}>
        {children}
    </Provider> );
}

export default Store;


// pratique 
// créer une fonction reductrice qui va permettre de gérer le contenu d'un panier 

// sa valeur par défaut est un tableau []
// vous aurez d'autre action à gérer dans le store 
// premier ajouter au panier 
// supprimer du panier 

// créer un composant panier qui permet de c'afficher le total du panier 

// créer un composant qui s'appelle catalogue 
// il est composé de 4 produits 
// { nom / prix / id  } 
// vous mettez le nom du projet de votre choix 

