const initialState = 10 ;

export const compteurReducer = (state = initialState, action) => {
    switch(action.type){
        case "COMPTEUR_AUGMENTER" :
            return state + 1 ;
        default :
            return state ;
    }
}
