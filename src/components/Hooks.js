import React, {useEffect, useState} from 'react';

function Hooks(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [info, setInfo] = useState({name: "", email: ""});
    const [posts, setPosts] = useState([
        "post one",
        "post two",
        "post three",
        "post four",
    ])

    // create a function add 1 to count, it is a method of useState
    function addOne() {
        setCount(count + 1);
    }

    function minusOne() {
        setCount(count - 1);
    }

    function textHandler(e) {
        // e is event
        setText(e.target.value);
    }

    function nameHandler(e) {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    function emailHandler(e) {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    function addPost() {
        setPosts([...posts, "new post"])
    }

    useEffect(
        // this is important to avoid infinite loop, and go with `useState` alot
        () => {
            console.log("useEffect is called");
            // only listen to count
        }, [count]
    )

    return (
        <div>
            <p>{count}</p>
            <button onClick={addOne}>Add one</button>
            <button onClick={minusOne}>Minus one</button>
            <p>{text}</p>
            <p><input type={text} onChange={textHandler}/></p>
            <p>Name: {info.name}</p>
            <input type={text} onChange={nameHandler}/>
            <p>Email: {info.email}</p>
            <input type={text} onChange={emailHandler}/>
            {/*wanna show the array of posts? need to use `map`*/}
            {posts.map(post => <p key={post}>{post}</p>)} {/*when using map, key is a must*/}
            <button onClick={addPost}>Add post</button>
        </div>
    );
}

export default Hooks;