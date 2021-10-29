const CardList = (props) => {
    const cards = props.cards;

   return(
    <div className="flex flex-wrap gap-5 w-screen justify-center">
        {cards.map((card) =>(
            <div className=" relative h-72 w-72 justify-center text-sm rounded shadow-md bg-white relative" key={card.pokeId}>
                <div className="absolute inset-0 bg-white text-center flex justify-center items-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                    <p className="font-bold">{card.location}</p>
                </div>
                <div className="ml-1">
                    <p className="text-black font-bold">{card.pokeId}</p>
                </div>
                <div className="flex justify-center max-w-1/2">
                    <img src = {card.imageUrl} alt="pokemon"></img> 
                </div>
                <div className="space-y-6 text-center">
                    <p className="font-bold">{card.pokeName}</p>
                </div>      
            </div>
        ))}  
    </div>
   ); 
}
 
export default CardList;
