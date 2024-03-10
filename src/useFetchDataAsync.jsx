import { useEffect, useState } from "react";

export default function useFetchDataAsync({url, method})
{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getData()
    {
        try {

            const response = await fetch(url, {method: method});
            if (!response.ok) throw new Error("Error " + response.status);
            const responseData = await response.json();
            setData(responseData);
        }
        catch(err){

            console.log(err);
            setError(err);
            setData(null);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        getData();
        
    }, []);

    return { loading, data, error}
}