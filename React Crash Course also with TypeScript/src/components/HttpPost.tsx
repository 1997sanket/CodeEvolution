import { useState } from "react";
import { Post } from "./HttpGet";

export const HttpPost = () => {
    const [post, setPost] = useState<Post>({
        userId: undefined,
        id: undefined,
        title: '', 
        body: '',
    })

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    //changes appropriate fields of the object based on the name attribute of JSX
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPost((prevPost) => ({ ...prevPost, [name]: value }));
      };
      

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">User Id</label>
            <input type="text" 
                    name="userId"
                    value={post.userId}
                    onChange={handleInputChange}
            />

            <label htmlFor="">Title</label>
            <input type="text" 
                    name="title"
                    value={post.title}
                    onChange={handleInputChange}

            />

            <label htmlFor="">Body</label>
            <input type="text" 
                    name="body"
                    value={post.body}
                    onChange={handleInputChange}

            />

            <button type="submit">Submit</button>
        </form>
    );
}