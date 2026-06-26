import useFetch from "./useFetch";

function UseCustomHookExample() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
    return (
        <div>
            <h1>Use Custome Hook Example</h1>

            {loading && <p>Loading ....</p>}

            {error && <p>Error: {error}</p>}

            {data && (
                <div>
                    <ul>
                        {data.map((post, index) => (
                            <li key={index}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            )
            }
        </div>
    );
}

export default UseCustomHookExample;