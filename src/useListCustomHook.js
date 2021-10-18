import axios from 'axios';
import { useEffect, useState } from 'react';

//Takes a url parameter
const useList = (url) => {

    const [data, setData] = useState( [] );
    const [totalPokemon, setTotalPokemon] = useState(0);

    //Gets data from url parameter passed in and sets the data in State.
    useEffect(() => {
        axios.get(url).then(data => {
            setData(data.data.content);
            setTotalPokemon(data.data.totalElements);
        })
    }, [url, totalPokemon]);

    return {data, totalPokemon};
}

export default useList;