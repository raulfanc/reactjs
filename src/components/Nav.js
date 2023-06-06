import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/form'>Form</Link></li>
                <li><Link to='/loaddata'>Loaddata</Link></li>
                <li><Link to='/fragment'>Fragment</Link></li>
                <li><Link to='/context-receiver'>Context Receiver</Link></li>
                <li><Link to='/hooks'>Hooks</Link></li>
                <li><Link to='/fetch-posts'>Fetch Posts</Link></li>
                <li><Link to='/reducer'>Reducer Counter</Link></li>
                <li><Link to='/loaddatawithreducer'>Load Data With Reducer</Link></li>
            </ul>
        </div>
    );
}

export default Nav;
