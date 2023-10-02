function Compteur({nb , color}) {
    // destructuration de la props
    return ( 
        <div>
        <span style={
            { color : color }
            }>{nb}
        </span>
        </div>
     );
}

export default Compteur;