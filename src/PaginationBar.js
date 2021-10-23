const PaginationBar = ({pokemonPerPage, totalPokemon, paginate}) => {

    const pageNumbers =[];

    for(let i=0; i<= Math.ceil(totalPokemon/pokemonPerPage); i++) {
        pageNumbers.push(i);
    }

    return ( 
        <nav>
            <ul>
                {pageNumbers.map(number =>(
                    <li key={number}>
                        <a onClick={(e)=> {
                            paginate(number);
                            e.preventDefault();
                        }} href='!#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

     );
}
 
export default PaginationBar;