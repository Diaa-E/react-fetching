import useFetchData from "./useFetchData";

export default function PostComponent({})
{
    const {loading, data, error} = useFetchData({url: "https://jsonplaceholder.typicode.com/posts", method: "GET"});

    if (error) return <p>Error loading post</p>

    if (loading) return <p>Loading...</p>

    return (
        <>
            <h2>Fetched post</h2>
            <h3>{data[0].title}</h3>
            <p>{data[0].body}</p>
        </>
    )
}