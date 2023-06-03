import React from 'react';
import button from "bootstrap/js/src/button";

function Helloworld(props) {

    function clickMe() {
        alert('clicked in Helloworld.js');
    }

    return (
        <div>
            <h1>free massage today - from Helloworld.js</h1>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <button className={'btn btn-success'} onClick={clickMe}>click me</button>
        </div>
    );
}


export default Helloworld;