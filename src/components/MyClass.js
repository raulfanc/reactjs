import React, {Component} from 'react';

class MyClass extends Component {
    constructor() {
        super();
        this.state = {
            // JSON format inside
            position: 'student',
            id: '1566044'
        }
    }

    clickMe() {
        alert('clicked in MyClass.js');
    }
    render() {
        return (
            <div>
                <h1>free massage today - from MyClass.js</h1>
                <p>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
                <p>position: {this.state.position}</p>
                <p>id: {this.state.id}</p>
                <button onClick={this.clickMe}>click me</button>
                <button onClick={this.props.myclick}>click me in return of the MyClass.js</button>
            </div>
        );
    }
}

export default MyClass;