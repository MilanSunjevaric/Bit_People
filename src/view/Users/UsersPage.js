import React from 'react'
import UserList from './UserList'
import { fetchUser } from '../../services/UserService'
import GridDiv from './GridDiv'
import Loader from '../components/Loader.js'
import SearchError from "../components/SearchError.js"
import About from '../components/About.js'


class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isGrid: false,
            buttonStyle: false,
            query: '',
            loading: true,
            about: false

        }
    }

    componentDidMount() {
        this.loadPageData();
    }

    loadPageData = () => {
        this.setState({ loading: true })
        fetchUser()
            .then(korisnici => {
                this.setState({ users: korisnici, loading: false })
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

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    aboutPage = () => {
        this.setState({
            about: true
        })
    }






    render() {

        if (this.state.loading === true)
            return <Loader />

        if (this.state.about === true)
            return <About />

        const buttonName = this.state.buttonStyle
            ? 'view_module'
            : 'view_list'

        const filteredUsers = this.state.users.filter(user => user
            .name.toLowerCase()
            .includes(this.state.query.toLowerCase()))



        const component = this.state.isGrid
            ? <GridDiv users={filteredUsers} />
            : <UserList users={filteredUsers} />;


        const searchError = filteredUsers.length === 0
            ? <SearchError />
            : component


        return (
            <div >
                <div className="row">
                    <ul className="right hide-on-med-and-down">
                        <form>
                            <input
                                placeholder="Search for..."
                                ref={input => this.search = input}
                                onChange={this.handleInputChange}
                            />
                            <p>{this.state.query}</p>
                        </form>
                        <li><a onClick={() => this.aboutPage()}> About</a></li>
                        <li><a><i className="material-icons" onClick={() => this.changeLayout()}>{buttonName}</i></a></li>
                        <li><a ><i className="material-icons" onClick={() => this.loadPageData()}>refresh</i></a></li>
                    </ul>
                </div>
                {searchError}
                {component}
            </div>
        );
    }
}


export default UsersPage