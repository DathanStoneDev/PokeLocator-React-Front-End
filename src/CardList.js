const CardList = (props) => {
    const cards = props.cards;

   return(
    <div className="flex flex-wrap pokemon-list">
        {cards.map((card) =>(
            <div className="w-72 space-x-6 text-center" key={card.pokeId}>
                <div>
                    <p>{card.pokeId}</p>
                </div>
                <div className="flex justify center;">
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

/*.pokemon {
    max-width: 300px;
    max-height: 600px;
    margin: auto;
    border-style: groove;
    text-align: center;
    
  } */
 
export default CardList;
