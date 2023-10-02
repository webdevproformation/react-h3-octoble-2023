function Exo4() {
    const formations = [ 
        { nom : "JS", duree : 5 , sommaire : ["decouverte", "installation"] } , 
        { nom : "angular" , duree : 2 , sommaire : ["init" , "deploiement"] } , 
        {  nom : "react" , duree : 15 , sommaire : ["dev" , "prod"] }
    ];

    const message = (m) => { console.log(m) }

    return ( 
        <div>
            { formations.map(function(formation, key){
                return <div key={key}>
                    <h2>{ formation.nom }</h2>
                    <p>durée {formation.duree} heures</p>
                    <ul>
                        { formation.sommaire.map(function(item, key2){
                            return <li key={key2}>{item}</li>
                        })  }
                    </ul>
                    <button onClick={ () => message( formation.nom) }> Lire la suite ... </button>
                </div>
            }) }
        </div>
     );
}

export default Exo4;