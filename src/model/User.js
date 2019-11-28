

class User {
    constructor(userData) {
        this.id = userData.login.uuid
        this.name = `${userData.name.first} ${userData.name.last}`
        this.dob = userData.dob.date
        this.email = userData.email
        this.image = userData.picture.medium

    }
}

export default User