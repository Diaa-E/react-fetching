import { useEffect, useState } from "react";

export default function useFetchData({url, method})
{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url, {mode: "cors", method: method})
            .then(response => {

                if (!response.ok) throw new Error("Error " + response.status);

                return response.json();
            })
            .then(jsonData => {

                setData(jsonData);
                setError(null);
            })
            .catch(error => {

                console.error(error);
                setError(error);
                setData(null);
            })
            .finally(() => setLoading(false))
    }, []);

    return { loading, data, error }
}