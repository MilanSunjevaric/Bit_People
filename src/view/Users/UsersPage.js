import React from 'react'
import UserList from './UserList'
import { fetchUser } from '../../services/UserService'


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

    starter(event) {                                 /* funkciju starter pozivamo na klik button-a  */

        fetchUser(event)                              /* pozivamo fetchUser()  */
            .then(korisnici => {                     /* pozivamo then metodu od promisa koji nam vraca fetchUser funkcija iz UserService */

                this.setState({ users: korisnici })   /* update-ujemo state gde mi u niz(users) stavljamo  objkete koje smo dobili od fetchUser funkcije koja ih je dobila u UserService.js */
            })
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={() => this.starter()}>Start</button>
                    <UserList users={this.state.users} />{/* pozivamo komponentu userList i prosledjujemo joj niz Users iz this.state,  */}
                </p>
            </div>
        )
    }
}


export default UsersPage