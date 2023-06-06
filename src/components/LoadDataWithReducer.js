import React, {useEffect} from 'react';
import axios from "axios";

// define global here for the url:
const url = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload  // action.payload is the data from the API
            }
        case 'LOAD_ERROR':
            return {
                loading: false,
                error: 'Something went wrong',   // error message when error happens
                post: [],    // empty array because we don't want to display anything
            }
    }
}


function LoadDataWithReducer(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                dispatch({type: 'LOAD_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'LOAD_ERROR'})
            })
    }, []);

    return (
        <div>
            {/*     `if else` condition below     */}
            {state.loading ? 'Loading' :
                state.post.map(post => <p key={post.id}>{post.title}</p>)
            }
            {state.error ? state.error : null}
        </div>
    );
}

export default LoadDataWithReducer;