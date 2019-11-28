import User from '../model/User.js'

const fetchUser = () => {
    const url = 'https://randomuser.me/api/?results=15'


    return fetch(url)
        .then(res => res.json())
        .then(data => {

            const MyUsers = data.results.map(userData => {
                return new User(userData)
            })                               /* data - objekat (response sa APIja) , results - property od data objekta */
            return MyUsers
        })

}

export { fetchUser }

