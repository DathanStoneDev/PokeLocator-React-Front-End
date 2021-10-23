import Navbar from "./Navbar";
import PaginationBar from "./PaginationBar";
import CardList from "./CardList";
import SunAndMoon from "./Components/GameLists/SunAndMoon";
import LetsGo from "./Components/GameLists/LetsGo";
import SwordAndShield from "./Components/GameLists/SwordAndShield";
import XandY from "./Components/GameLists/XandY";
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
      <div className="container">
        <Navbar handleUrl={handleUrl}/>
        <div className="content">
          <Switch>
            <Route exact path="/SunAndMoon">
              <SunAndMoon pokemonPerPage={pokemonPerPage} pokemon={pokemon} paginate={paginate} cards={cards}/>
            </Route>
            <Route exact path="/LetsGo">
              <LetsGo />
            </Route>
            <Route exact path="/SwordAndShield">
              <SwordAndShield />
            </Route>
            <Route exact path="/XandY">
              <XandY />
            </Route>
          </Switch>
        </div>  
      </div>
    </Router>
  );
}


export default App;
