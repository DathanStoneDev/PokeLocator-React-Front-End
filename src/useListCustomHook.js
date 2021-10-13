import axios from 'axios';
import { useEffect, useState } from 'react';

const useList = (url) => {

    const [data, setData] = useState( [] );

    useEffect(() => {
        axios.get(url).then(data => {
            setData(data.data);
        })
    }, [url]);

    return {data};
}
 
export default useList;