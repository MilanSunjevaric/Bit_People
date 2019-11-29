

class User {
    constructor(userData) {
        this.id = userData.login.uuid
        this.name = `${userData.name.first} ${userData.name.last}`
        this.dob = new Date(userData.dob.date).toLocaleString().split(',')[0]
        this.email = userData.email   /* getMail metoda */
        this.image = userData.picture.large
    }

    getHiddenEmail() {
        const mail = this.email.split('@')
        const first = mail[0].charAt(0)
        const last = mail[0].charAt(mail[0].length - 1)

        return `${first}...${last}${mail[1]}`
    }
}

export default User