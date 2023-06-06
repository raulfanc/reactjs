import React, {useContext} from 'react';
import {myContext} from "../App";


function ContextReceiver(props) {
    const data = useContext(myContext)

    return (
        <div>Context Receiver

            {data}

        </div>
    );
}

export default ContextReceiver;