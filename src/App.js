import Navbar from "./Navbar";
import PaginationBar from "./PaginationBar";
import CardList from "./CardList";
import { useState } from "react";
import useList from "./useListCustomHook";

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonPerPage] = useState(50);
  const [url, setUrl] = useState("");
  const handleUrl = (url)=> setUrl(url);
  const {data: cards, totalPokemon: pokemon} = useList(url + "?page=" + currentPage + "&size="+ pokemonPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //"http://localhost:8080/api/pokemon/ultra-sun-and-moon/list?page="


  

  return (
    <div className="container">
      <Navbar handleUrl={handleUrl}/>
      <div className ="poke-locations">
            <div className="pagination-bar">
                <PaginationBar pokemonPerPage={pokemonPerPage} totalPokemon={pokemon} paginate={paginate}/>
            </div>
            <CardList cards={cards}/>
        </div>
    </div>
  );
}

export default App;
