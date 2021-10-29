import CardList from "./CardList";
import PaginationBar from "./PaginationBar";


const LetsGoList = ({pokemonPerPage, pokemon, paginate, cards}) => {
    return ( 
        <div>
           <PaginationBar pokemonPerPage={pokemonPerPage} totalPokemon={pokemon} paginate={paginate}/>
           <CardList cards={cards}/> 
        </div>
     );
}

export default LetsGoList;