import React from 'react'
import UserList from './UserList'
import { fetchUser } from '../../services/UserService'
import GridDiv from './GridDiv'


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isGrid: true
        }

    }

    componentDidMount() {

        fetchUser()
            .then(korisnici => {

                this.setState({ users: korisnici })
            })
    }




//starter(event) {                                 /* funkciju starter pozivamo na klik button-a  */

   //  fetchUser(event)                              /* pozivamo fetchUser()  */
//.then(korisnici => {                     /* pozivamo then metodu od promisa koji nam vraca fetchUser funkcija iz UserService */

    // this.setState({ isGrid: korisnici })       /* update-ujemo state gde mi u niz(users) stavljamo  objkete koje smo dobili od fetchUser funkcije koja ih je dobila u UserService.js*/
    // })
    // }

    render() {

        if (this.state.isGrid) {
            return (
                <div>
                    <GridDiv users={this.state.users} />
                </div>
            )
        }

        return (
            <div>
                <p>
                    {/* <button onClick={() => this.starter()}>Start</button> */}
                    <UserList users={this.state.users} />{/* pozivamo komponentu userList i prosledjujemo joj niz Users iz this.state,  */}
                </p>
            </div>
        )
    }
}


export default UsersPage