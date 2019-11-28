/* import React from 'react'
import postsArray from './posts'



class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }

        setTimeout(() => {
            this.setState({
                posts: postsArray
            })
        }, 5000)
    }

    render() {
        return (
            <main className='main'>
                {this.state.posts.map(post => <div><h2>{post.id}</h2><p>{post.title}</p></div>)}

            </main>
        )
    }
}


export default Main */


