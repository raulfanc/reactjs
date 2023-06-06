
# function-based components
a function that return a jsx
serving the same purpose as class-based components
- shortcut is ```rfc```

---

# class-based components
render() is a must, return jsx
serving the same purpose as function-based components
- shortcut is ```rcc```

---
# State
a js variable that holds some data, using `setState()` to update the state
- `console.log()` to check the state whether is executed or not
a js object that contains an array of values
- the change has to be done on the object, not the values (This happens because, despite the object's content has changed, the object reference in memory remains the same.)
```jsx
const [user, setUser] = useState({
    name: "John",
    age: 20
});

const updateUserHandler = () => {
    // user.name = "Peter";  # this wont work
    // setUser(user);
    const newUser = Object.assign({}, user);
    newUser.name = "Peter";
    setUser(newUser);
};
```
`Object.assign({}, user)` is used to create a new object that is a copy of the current `user` object. Then, we can safely modify this new object, as it won't directly mutate the original user object. Finally, we call `setUser(newUser)`, which replaces the old `user` object with our newly modified object in the state.

In this way, React is aware of the state change because the reference in memory to the user object has changed, and thus it will re-render the component with the updated state.


```jsx
    const[posts,setPosts]=useState([
        "post one",
        "post two",
        "post three",
        "post four",
    ])

    function addPost() {
        setPosts([...posts,"new post"]);
    }
            {/*wanna show the array of posts? need to use `map`*/}
            {posts.map(post=><p key={post}>{post}</p>)} {/*when using map, key is a must*/}
```
`map` is a JavaScript method used to perform operations on array elements. In the context of React, `map` is often used to create a list of elements from an array of data.

In your code, `map` is being used to create a paragraph (`<p>`) element for each string in the `posts` array. The line `posts.map(post=><p key={post}>{post}</p>)` says "for each post in the posts array, create a new paragraph element with the post string as its child."

Regarding the `key` prop, when you create a list of elements in React, each element needs a unique `key` prop. This is used by React to identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. This is necessary for React's diffing algorithm, which is used to determine what changes need to be made to the DOM in order to update the view.

In your code, you're using the post string as the key: `key={post}`. This is fine as long as each post string is unique. If there could be duplicate post strings, you'd need to use something else as the key, such as the index of each element in the array. For instance, you could do:

```jsx
{posts.map((post, index) => <p key={index}>{post}</p>)}
```
Note that using the index as a key is not recommended if the order of items may change, as this can negatively impact performance and cause issues with component state. The best way is to use unique and constant ids whenever possible.

```jsx
    const[info,setInfo]=useState({name:"",email:""});


    function infoHandler(e) {
        setInfo({...info,[e.target.name]:e.target.value});
    }
```
This is a common pattern used to handle multiple form inputs with just a single function (`infoHandler`). The function `infoHandler` is called when there's a change in the input elements.

The function `setInfo` updates the state object `info`. However, instead of manually specifying which property to change, it dynamically assigns the property based on the name of the form element that triggered the event (represented by `e.target.name`).

Here's a breakdown of `setInfo({...info,[e.target.name]:e.target.value})`:

- `{...info}` creates a new object that is a copy of the current state of `info`. This is necessary because in React, state should be treated as if it were immutable. You should never modify state directly.
- `[e.target.name]` is a computed property name. It uses the value of `e.target.name` (which should be either "name" or "email" if those are your input field names) as the property to add or modify in the copied `info` object. The square brackets `[]` around `e.target.name` tell JavaScript to interpret the value of `e.target.name` as the property name.
- `e.target.value` is the current text that the user has entered into the input field.

This line is essentially saying "Create a new object that's a copy of `info`, but replace the property that has the same name as the triggering input field's name with the triggering input field's current value".

Here is an example of how it would be used in your form:
```jsx
<input type="text" name="name" value={info.name} onChange={infoHandler} />
<input type="text" name="email" value={info.email} onChange={infoHandler} />
```
In this example, if you typed "John" into the name input field, `e.target.name` would be `"name"` and `e.target.value` would be `"John"`. This would result in `setInfo({...info, name: "John"})`. Similarly, if you typed "[john@example.com](mailto:john@example.com)" into the email input field, it would result in `setInfo({...info, email: "john@example.com"})`.

So this pattern allows you to handle any number of form fields with just a single function.

### useEffect
```jsx
    useEffect(
        // this is important to avoid infinite loop, and go with `useState` alot
        () => {
            console.log("useEffect is called")
            // only listen to count
        }, [count]
    )
```
`useEffect` is a function provided by React that is used for handling side effects in functional components. Side effects are operations that don't fit into the render flow, such as data fetching, setting up a subscription, or manually changing the DOM.

The `useEffect` function takes two arguments:

1. A function where you put the code of your side effect.
2. An optional dependency array that tells React when to re-run the side effect.

In your code snippet, `useEffect` is called with a function that logs "useEffect is called" to the console and a dependency array containing `count`. This tells React to only re-run the effect when `count` changes.

The reason we use a dependency array is to avoid unnecessary effect executions. If we didn't include the dependency array, the effect would run after every render, which could lead to performance issues.

When you pass an empty array `[]` as the second argument to `useEffect`, the side effect runs once after the initial render, similar to `componentDidMount` in class components. It won't run on subsequent re-renders unless the component is unmounted and mounted again.

In your case, `useEffect` will run every time the `count` state changes. This is useful when you want to perform a side effect in response to a change in state or props. For instance, you might want to fetch data whenever the ID of a user changes, or log a message whenever a count value increases.

To sum up, `useEffect` is a very powerful tool in React that allows you to manage side effects in a clean and efficient manner. Understanding how to use it properly is crucial to writing performant and bug-free React applications.


```jsx
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
```

initialize your `posts` state to an empty array with this line:
```jsx
const [posts, setPosts] = useState([]);  // set an empty array as default value
```

You're using the `useState` Hook here, which returns a pair: the current state value (`posts`), and a function that lets you update it (`setPosts`).

Next, you define your side effect in `useEffect`:
```jsx
useEffect(
    () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [posts]
);
```

Inside `useEffect`, you're making a GET request to `https://jsonplaceholder.typicode.com/posts` to fetch some posts. Once the data arrives, you log it to the console and update your `posts` state with `setPosts(response.data)`. If there's an error with the request, you catch it and log the error message.

The dependency array for `useEffect` contains `posts`. This means the effect will re-run whenever `posts` changes. However, in this particular case, having `posts` as a dependency could potentially lead to an infinite loop because `setPosts` changes `posts`, which triggers `useEffect`, which calls `setPosts`, and so on. You probably want to remove `posts` from the dependency array so that the effect runs once after the initial render (like `componentDidMount` in class components). That would look like this:
```jsx
useEffect(
    //...
, []); // Empty dependency array
```
Lastly, in your render method, you map over the `posts` array to create a list of `<p>` elements. Each element's content is a post title, and its key is the post id:
```jsx
return (
    <div>
        {posts.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
);
```
As for real-world use cases, this pattern is incredibly common. Any time you need to fetch data from an API when a component mounts and display that data, you can use this approach. You might do this to fetch and display user information, articles, products in an online store, or a multitude of other data. It's a fundamental pattern for many web applications.