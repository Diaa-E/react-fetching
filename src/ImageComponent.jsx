import { useEffect, useState } from "react"

export default function ImageComponent({})
{
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/photos", {mode: "cors"})
        .then(response => response.json())
        .then(response => setImageSrc(response[Math.floor(Math.random() * response.length)].url))
        .catch(error => console.error(error));

    }, []);

    return (
        imageSrc &&
        <>
            <h1>Fetched image</h1>
            <img src={imageSrc} alt="" />
        </>
    )
}