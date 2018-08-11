import React from 'react';
import axios from 'axios';

export default class Postcomponent extends React.Component{



componentWillMount(){
    console.log('<-- calling constructor --->');
    this.state = {posts:[]}
}


componentDidMount() {
    let aPromise = axios.get('https://jsonplaceholder.typicode.com/posts');
    aPromise.then(
        (res) => { console.log(res.data);
                   this.setState({posts:res.data}); 
                } ,
        (err) => {console.log(res.data)}
    )
    
}
    render() {
        console.log("reder --->");
        var poststoBeCreated = this.state.posts.map(
            (p,i) => <li key={p.id}> {p.id} {p.title} </li>
        );
        return <ul> {poststoBeCreated} </ul>
    }
}
