function Event() {

    const handleClick = () => alert("je suis la deuxième méthode" ); 

    return ( <div>
        <button onClick={ function(){} }> btn </button>
        <button onClick={ () => alert("bonjour")  }> btn </button>
        <button onClick={  handleClick  } > btn 3 </button>
        {/** ne pas mettre de () après handleClick dans le jsx 
         * car on veut que la fonction soit exécutée lors du clique sur le bouton  */ }
    </div>
     );
}

export default Event;

// function(){ 
//    return "2"
//}

// () => { return "2" }
// () =>  "2" 