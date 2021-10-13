import CardList from "./CardList";
import useList from "./useListCustomHook";

const PokemonLocations = () => {

    const { data: cards } = useList('http://localhost:8080/api/pokemon/ultra-sun-and-moon/list');

    return ( 
        <div className ="poke-locations">
            <CardList cards={cards}/>
        </div>
        



     );
}
 
export default PokemonLocations;