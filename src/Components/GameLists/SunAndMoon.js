import CardList from "../../CardList";
import PaginationBar from "../../PaginationBar";


const SunAndMoonList = ({pokemonPerPage, pokemon, paginate, cards}) => {
    return ( 
        <div>
           <PaginationBar pokemonPerPage={pokemonPerPage} totalPokemon={pokemon} paginate={paginate}/>
           <CardList cards={cards}/> 
        </div>



     );
}
 
export default SunAndMoonList;