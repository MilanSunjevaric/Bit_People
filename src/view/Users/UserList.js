import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {
    /* const { users } = props  */   // rasturanje objekta 


    const userItems = props.users.map(user => {           /* mapiramo niz(objekata, sto smo videli iz console.log-a) iz kog svaki objekat prosledjujemo userListItem-u i pozivamo isti.  */

        return <UserListItem user={user} />
    })
    console.log(userItems)
    return (
        <ul>
            {userItems}
        </ul>

    )

}

export default UserList


