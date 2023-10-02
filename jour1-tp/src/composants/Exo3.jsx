function Exo3() {
    const formations = [ 
        { nom : "JS", duree : 5 } , 
        { nom : "angular" , duree : 2 } , 
        {  nom : "react" , duree : 15 }
    ];

    return <>
        <ul>
            { formations.map(function(item, key){
                return <>{ item.duree > 10 ? 
                    <li key={key}  style={{ color : 'red' }}>{ item.nom }</li> :
                    <li key={key} style={{ color : 'blue' }}>{ item.nom }</li> 
                }
                </>
            }) }
            { formations.map(function(item, key){
                return <li key={key}  style={{ color : (item.duree > 10) ? 'red' : 'blue' }}>{ item.nom }</li> 
            }) }
        </ul>
    </>;
}

export default Exo3;