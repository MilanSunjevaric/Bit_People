import React from 'react'
import UserList from './UserList'
import { fetchUser } from '../../services/UserService'
import GridDiv from './GridDiv'


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isGrid: false,
            buttonStyle: false
        }
    }

    componentDidMount() {
        this.loadPageData();
    }

    loadPageData = () => {
        fetchUser()
            .then(korisnici => {

                this.setState({ users: korisnici })
            })
    }

    changeLayout = () => {
        this.buttonStyle()
        this.setState(preState => {
            return {
                isGrid: !preState.isGrid
            }
        })
    }

    buttonStyle = () => {
        this.setState(preState => {
            return {
                buttonStyle: !preState.buttonStyle
            }
        })
    }

    render() {
        const component = this.state.isGrid
            ? <GridDiv users={this.state.users} />
            : <UserList users={this.state.users} />;

        const buttonName = this.state.buttonStyle
            ? 'view_module'
            : 'view_list'


        return (
            <div >
                <div className="row">
                    <ul className="right hide-on-med-and-down">
                        <li><a><i className="material-icons" onClick={() => this.changeLayout()}>{buttonName}</i></a></li>
                        <li><a ><i className="material-icons" onClick={() => this.loadPageData()}>refresh</i></a></li>
                    </ul>
                </div>

                {component}
            </div>
        );
    }
}


export default UsersPage