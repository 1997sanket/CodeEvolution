import { useEffect, useState } from "react";

export type Post = {
    userId?: number,
    id?: number,
    title: string,
    body: string
}

export const HttpGet = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    /*
        By default useEffect will run everytime the component is rendered
        We can manipulate it by giving dependencies in the second argument.
        Here we only want it to render once when the component is first loaded,
        hence we kept it empty array.

    */
    useEffect(
        () => {

            // Fetch returns a promise which is like CompletableFuture of Java
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => setPosts(data))
                .catch(error => alert(error))
        }, []);    // this empty array says when to re-run the effect

    return (
        <div>
            <ul>
                { 
                    // this map function is similar to map of Java Streams
                    posts.map(post => <li key={post.id}> {post.title} </li>)
                }
            </ul>
        </div>
    );
}