// import logo from './logo.svg';
import './App.css';
// import Helloworld from "./components/Helloworld";
// import MyClass from "./components/MyClass";
// import Condition from "./components/Condition";
import Loop from "./components/Loop";
import Form from "./components/Form";
import Loaddata from "./components/Loaddata";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Fragment from "./components/Fragment";
import ContextReceiver from "./components/contextReceiver";
import React from "react";
import Hooks from "./components/Hooks";
import FetchPosts from "./components/FetchPosts";
import Reducer from "./components/Reducer";
import LoadDataWithReducer from "./components/LoadDataWithReducer";

export const myContext = React.createContext('default value')

function App() {
    function clickMe() {
        alert('clicked in App.js');
    }


    return (
        <div className="App">
            <myContext.Provider value={'this is the changed value'}>
                <ContextReceiver/>
            </myContext.Provider>
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
                <Route path={"/"} element={<Loop/>}/>
                <Route path={"/form"} element={<Form/>}/>
                <Route path={"/loaddata"} element={<Loaddata/>}/>
                <Route path={"/fragment"} element={<Fragment/>}/>
                <Route path={"/context-receiver"} element={<ContextReceiver/>}/>
                <Route path={"/hooks"} element={<Hooks/>}/>
                <Route path={"fetch-posts"} element={<FetchPosts/>}/>
                <Route path={"reducer"} element={<Reducer/>}/>
                <Route path={"loaddatawithreducer"} element={<LoadDataWithReducer/>}/>
            </Routes>
        </div>
    );
}

export default App;
