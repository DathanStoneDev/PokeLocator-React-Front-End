const CardList = (props) => {
    const cards = props.cards;

   return(
    <div className="pokemon-list">
        {cards.map((card) =>(
            <div className="pokemon" key={card.pokeId}>
                <div>
                    <p>{card.pokeId}</p>
                </div>
                <div>
                    <img src = {card.imageUrl} className="pokemon-image" alt="pokemon"></img> 
                </div>
                <div className="info">
                    <p>{card.pokeName}</p>
                    <p>{card.location}</p>
                </div>      
            </div>
        ))}  
    </div>
   ); 
}
 
export default CardList;
