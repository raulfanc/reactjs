import React, {Component} from 'react';

class Loop extends Component {

    constructor() {
        super();
        this.state={
            languages: ['Java', 'Python', 'c++', 'c#', 'javascript']
        }
    }
    render() {
        return (
            <div>
     {/*run a loop code here to run them one by one*/
        this.state.languages.map(language=>
            <p key={language}>{language}</p>
        )}
            </div>
        );
    }
}

export default Loop;