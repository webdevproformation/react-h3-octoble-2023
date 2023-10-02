import Commentaire from "./Commentaire";

function Article() {
    const data = {
        titre : "Article 1" , 
        contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat ad iure debitis quisquam corrupti similique delectus, beatae in sint saepe voluptatibus tenetur amet magnam harum dolore culpa sunt modi!" , 
        auteur : "Victor Hugo" , 
        commentaires : [ 
            { contenu : "super article", date : "01/01/2023"  },
            { contenu : "excellente nouvelle", date : "01/01/2023"  },
            { contenu : "article à finir", date : "01/01/2023"  }
        ]
    }
    return ( <div>
        <h1>{ data.titre }</h1>
        <p>{data.contenu}</p>
        <p>auteur : {data.auteur} </p>
        { data.commentaires.map(function(item , key){
            return <Commentaire key={key} contenu={item.contenu} date={item.date} />
        }) }
    </div>  );
}

export default Article;