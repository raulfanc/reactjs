import React, {Component} from 'react';

class Condition extends Component {
    constructor() {
        super();
        this.state = {
            // JSON format inside
            name: 'Rex_Condition',
        }
    }

    changeName() {
        this.setState({
            name:this.state.name === 'Rex_Condition' ? 'Changed Rex name' : 'Rex_Condition'
        })

    }

    render() {
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <button onClick={this.changeName.bind(this)}>change name</button>
                <button onClick={() => this.changeName()}>change name</button> {/*same as above*/}
            </div>
        );
    }
}

export default Condition;