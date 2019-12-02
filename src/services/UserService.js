import User from '../model/User.js'
import ReactTimeAgo from 'react-time-ago'
import { longStackSupport, invoke } from 'q'


const emptyUsersCache = () => {
    localStorage.removeItem("apiUsers")
}

const fetchUser = () => {
    const cachedApiUsers = JSON.parse(localStorage.getItem("apiUsers"))

    if (cachedApiUsers && cachedApiUsers.length) {
        return Promise.resolve(cachedApiUsers.map(apiUser => new User(apiUser)))
    }

    return fetch('https://randomuser.me/api/?results=15')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("apiUsers", JSON.stringify(data.results))
            localStorage.setItem("time", JSON.stringify(new Date().getTime()))
            return data.results.map(apiUser => new User(apiUser))
        })


}

export { fetchUser, emptyUsersCache }

