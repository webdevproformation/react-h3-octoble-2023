import Compteur from "./Compteur";

function Liste() {
    const data = [
        { nb : 2 , color : "blue" },
        {nb : 10 , color : "red"},
        {nb : -10 , color : "purple"}
    ]

    return <div>
        {/* <Compteur nb={2} color="blue" />
        <Compteur nb={10} color="red"/>
        <Compteur nb={-10} color="purple"/> */}
        { data.map(function(item, key){
            return <Compteur nb={item.nb} color={item.color} key={key}/>
        }) }
    </div>;
}

export default Liste;