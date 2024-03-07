import { useState, useEffect } from "react";

export default function useImageUrl()
{
    const [imageSrc, setImageSrc] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/photos", {mode: "cors"})
        .then(response => {

            if (response.status >= 400) throw new Error(`Error ${response.status}`)

            return response.json();
        })
        .then(response => {

            setImageSrc(response[Math.floor(Math.random() * response.length)].url);
        })
        .catch(error => {
            console.error(error);
            setError(error);
        })
        .finally(() => setLoading(false));

    }, []);

    return { imageSrc, error, loading };
}