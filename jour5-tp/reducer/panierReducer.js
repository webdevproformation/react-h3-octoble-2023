const initialState = [] ;

export const panierReducer = (state = initialState, action) => {
    switch(action.type){
        case "PANIER_ADD" :
            const cloneState = JSON.parse(JSON.stringify(state))
            const recherche = cloneState.find(function(item){
                return item.id === action.payload.id
            })
            if(recherche === undefined){
                action.payload.qte = 1;
                cloneState.push(action.payload)
            }else {
                const index = cloneState.indexOf(recherche);
                cloneState[index].qte = cloneState[index].qte + 1;
            }
            
            return cloneState ;
        default :
            return state ;
    }
}
