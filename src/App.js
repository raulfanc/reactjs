import logo from './logo.svg';
import './App.css';
import React from "react";
import Helloworld from "./components/Helloworld";
import Searching from "./components/Searching";
import MyClass from "./components/MyClass";
import Condition from "./components/Condition";
import Loop from "./components/Loop";
import Form from "./components/Form";
import Loaddata from "./components/Loaddata";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";

function App() {
    function clickMe() {
        alert('clicked in App.js');
    }

    return (
        <div className="App">
            <Nav/>
            {/*<h1>welcome to Massage club</h1>*/}
            {/*<Helloworld name={'Rex Huang, function-based'} age={'31'}/>*/}
            {/*<Searching/>*/}
            {/*<MyClass name={'Rex Huang, class-based'} age={'38'} myclick={clickMe}/>*/}
            {/*<button onClick={clickMe}>click me</button>*/}
            {/*<Condition/>*/}
            {/*<Loop/>*/}
            {/*<Form/>*/}
            {/*<Loaddata/>*/}
            <Routes>
                <Route path='/' element={<Loop/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/loaddata' element={<Loaddata/>}/>
            </Routes>
        </div>
    );
}

export default App;
