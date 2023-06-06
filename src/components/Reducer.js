import React, {useReducer} from 'react';


const initialisedState = {count: 0}
const reducer = (state, action) => { // action is an object, it has a type property, commonly used types are increment, decrement and reset
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
    }
}

function Reducer(props) {
    const [state, dispatch] = useReducer(reducer, initialisedState);
    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={()=>dispatch({type:"increment"})}>Add one</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Minus one</button>
        </div>
    );
}

export default Reducer;