import CardList from "./CardList";
import useList from "./useListCustomHook";
import { useState } from "react";
import PaginationBar from "./PaginationBar";

const PokemonLocations = () => {


    const [currentPage, setCurrentPage] = useState(0);
    const [pokemonPerPage] = useState(50);
    const [url, setUrl] = useState("");
    const {data: cards, totalPokemon: pokemon} = useList("http://localhost:8080/api/pokemon/ultra-sun-and-moon/list?page=" + currentPage + "&size="+ pokemonPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //use this method to set the url - have the Navbar component set the url based onClick event
    //then add this method in useList above.
    const navigatePokemonLists = (url) => setUrl(url);


    return ( 
        <div className ="poke-locations">
            <div className="pagination-bar">
                <PaginationBar pokemonPerPage={pokemonPerPage} totalPokemon={pokemon} paginate={paginate}/>
            </div>
            <CardList cards={cards}/>
        </div>
     );
}
 
export default PokemonLocations;