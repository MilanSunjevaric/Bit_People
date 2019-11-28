import React from 'react'
import UserList from './UserList'
import { fetchUser } from '../../services/UserService'
import Button from '../components/Button';




class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }

    /* componentDidMount() {

        fetchUser()
            .then(korisnici => {

                this.setState({ users: korisnici })
            })
    } */

    starter(event) {

        fetchUser(event)
            .then(korisnici => {

                this.setState({ users: korisnici })
            })
    }

    render() {
        return (
            <div>
                <h2>
                    <button onClick={() => this.starter()}>Start</button>
                    <UserList users={this.state.users} />
                </h2>
            </div>
        )
    }
}


export default UsersPage