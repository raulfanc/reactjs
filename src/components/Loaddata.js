import React, {Component} from 'react';

class Loaddata extends Component {

    constructor()
    {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                this.setState({posts: data})
            })
    }

    render()
    {
        return (
            <div>
                {
                    this.state.posts.map(
                        post => {
                            return <p key={post.id}>{post.title}</p>
                        }
                    )
                }
            </div>
        );
    }
}

export default Loaddata;
