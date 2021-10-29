import { Link } from 'react-router-dom';





const Navbar = ({handleUrl}) => {

  const sunAndMoon = 'http://localhost:8080/api/pokemon/ultra-sun-and-moon/list';
  const xAndY = '';
  const swordAndShield = '';
  const letsGo = 'http://localhost:8080/api/pokemon/lets-go/list';

  return (
      <nav className="flex w-screen justify-center pb-5 pt-4">
      <ul className="flex flex-wrap justify-center gap-4 text-black font-bold">
        <li className="rounded-lg p-2 shadow-md bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
          <Link onClick={() => handleUrl(xAndY)} to="/XandY">
            Pokemon X and Y
          </Link>
        </li>
        <li className="rounded-lg p-2 shadow-md bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
          <Link onClick={() => handleUrl(sunAndMoon)} to="/SunAndMoon">
            Pokemon Ultra Sun and Moon
          </Link>
        </li>
        <li className="rounded-lg p-2 shadow-md bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
          <Link onClick={() => handleUrl(swordAndShield)} to="/SwordAndShield">
            Pokemon Sword and Shield
          </Link>
        </li>
        <li className="rounded-lg p-2 shadow-md bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
          <Link onClick={() => handleUrl(letsGo)} to="/LetsGo">
            Let's Go Eevve and Let's Go Pikachu
          </Link>
        </li>
      </ul>
    </nav>
  
  );
};

export default Navbar;
