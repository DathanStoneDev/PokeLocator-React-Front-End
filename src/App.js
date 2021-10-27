import Navbar from "./Navbar";
import SunAndMoon from "./SunAndMoon";
import LetsGo from "./LetsGo";
import XandY from "./XandY";
import { useState } from "react";
import useList from "./useListCustomHook";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonPerPage] = useState(50);
  const [url, setUrl] = useState("");
  const handleUrl = (url)=> setUrl(url);
  const {data: cards, totalPokemon: pokemon} = useList(url + "?page=" + currentPage + "&size="+ pokemonPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
        <Navbar handleUrl={handleUrl}/>
        <div className="content">
          <Switch>
            <Route exact path="/SunAndMoon">
              <SunAndMoon pokemonPerPage={pokemonPerPage} pokemon={pokemon} paginate={paginate} cards={cards}/>
            </Route>
            <Route exact path="/LetsGo">
              <LetsGo pokemonPerPage={pokemonPerPage} pokemon={pokemon} paginate={paginate} cards={cards}/>
            </Route>
            <Route exact path="/XandY">
              <XandY />
            </Route>
          </Switch>
        </div> 
    </Router>
  );
}


export default App;
