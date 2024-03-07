import { useEffect, useState } from "react";
import useImageUrl from "./useImageUrl";

export default function ImageComponent({})
{
    const {imageSrc, error, loading } = useImageUrl();

    if (error) return <p>Error loading image</p>

    if (loading) return <p>Loading...</p>

    return (
        imageSrc &&
        <>
            <h1>Fetched image</h1>
            <img src={imageSrc} alt="" />
        </>
    )
}