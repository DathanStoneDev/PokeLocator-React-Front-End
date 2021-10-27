import { Link } from 'react-router-dom';





const Navbar = ({handleUrl}) => {

  const sunAndMoon = 'http://localhost:8080/api/pokemon/ultra-sun-and-moon/list';
  const xAndY = '';
  const swordAndShield = '';
  const letsGo = 'http://localhost:8080/api/pokemon/lets-go/list';

  return (
    <nav id="navbar">
      <ul className="game-list">
        <li className="game-item">
          <Link onClick={() => handleUrl(xAndY)} to="/XandY">
            Pokemon X and Y
          </Link>
        </li>
        <li className="game-item">
          <Link onClick={() => handleUrl(sunAndMoon)} to="/SunAndMoon">
            Pokemon Ultra Sun and Moon
          </Link>
        </li>
        <li className="game-item">
          <Link onClick={() => handleUrl(swordAndShield)} to="/SwordAndShield">
            Pokemon Sword and Shield
          </Link>
        </li>
        <li className="game-item">
          <Link onClick={() => handleUrl(letsGo)} to="/LetsGo">
            Let's Go Eevve and Let's Go Pikachu
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
