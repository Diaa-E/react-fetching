import { useEffect, useState } from "react";
import useImageUrl from "./useImageUrl";
import useFetchData from "./useFetchData";

export default function ImageComponent({})
{
    const {loading, data, error} = useFetchData({url: "https://jsonplaceholder.typicode.com/photos", method: "GET"});

    if (error) return <p>Error loading image</p>

    if (loading) return <p>Loading...</p>

    return (
        data &&
        <>
            <h1>Fetched image</h1>
            <img width={100} src={data[Math.floor(Math.random() * data.length)].url} alt="" />
        </>
    )
}