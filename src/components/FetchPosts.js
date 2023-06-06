import React, {useEffect, useState} from 'react';
import axios from "axios";

function FetchPosts(props) {

    const [posts, setPosts] = useState([]);  // set an empty array as default value

    useEffect(
        // only listen to posts
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    console.log(response.data) // use response.data to print out the object
                    setPosts(response.data)  // set the response.data to posts
                })
                .catch(err => {
                    console.log(err);
                })
        }, [posts]
    );

    return (
        <div>
            {posts.map(post => <p key={post.id}>{post.title}</p>)}
        </div>
    );
}

export default FetchPosts;