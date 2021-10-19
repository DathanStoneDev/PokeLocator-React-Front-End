

const Navbar = ({handleUrl}) => {

  const sunAndMoon = 'http://localhost:8080/api/pokemon/ultra-sun-and-moon/list';
  const xAndY = '';
  const swordAndShield = '';
  const letsGo = '';

  return (
    <nav id="navbar">
      <ul className="game-list">
        <li className="game-item">
          <a onClick={() => handleUrl(xAndY)} href='!#'>
            Pokemon X and Y
          </a>
        </li>
        <li className="game-item">
          <a onClick={() => handleUrl(sunAndMoon)} href='!#'>
            Pokemon Ultra Sun and Moon
          </a>
        </li>
        <li className="game-item">
          <a onClick={() => handleUrl(swordAndShield)} href='!#'>
            Pokemon Sword and Shield
          </a>
        </li>
        <li className="game-item">
          <a onClick={() => handleUrl(letsGo)} href='!#'>
            Let's Go Eevve and Let's Go Pikachu
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
