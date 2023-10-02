// ffc
function Base () {

    const text = "Bonjour les amis";
    const url = "https://via.placeholder.com/200"
    return ( <div>
        {/** interpolation */}
        <h2>{ text }</h2>
        <img src={url} alt="" />{ /** ne pas oublier le / pour fermer la balise  */ }
        <p id="premier" title="ok" className="info">lorem ipsum </p>
        {/** attention le mot clé class est déjà utilisé en js 
         * il faudra utiliser plutôt className 
         */}
        <p style={{ color : 'blue' , backgroundColor : 'yellow'  }} >lorem 2</p>
        {/** l'attribut style est à une syntaxe spéciale en jsx  */}
        {/** en js de balise addEventListener MAIS en js */ }
         <button onClick={ function(){} } >btn </button>
    </div> );
}

export default Base ;