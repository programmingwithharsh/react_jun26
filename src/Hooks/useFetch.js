import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log("axios", response);
                setData(response.data); // updating users
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error); // handle error
                setError(error.message);
                setLoading(false);
            })
    }, [url]) // re fetch when url changes

    return { data, loading, error };
}

export default useFetch;