import React from 'react'

const UserListItem = (props) => {
    let genderClass = '';
    if (props.user.gender === "female") {
        genderClass = 'female'
    }

    return (
        <li className={`collection-item avatar ${genderClass}`} >
            <div className="positioning"> <img src={props.user.image} alt="" className="circle" />  </div>      {/* prolazimo kroz propse, tj pristupamo objektima koje smo dobil iz niza userItems iz userList-a */}
            {/* <span className="title">{props.user.name}</span> */}
            <p className="info"> {props.user.name}<br /><i class="tiny material-icons">email</i>{props.user.getHiddenEmail()} <br />
                <i class="tiny material-icons">cake</i> {props.user.dob}
            </p>
        </li>
    )

}
export default UserListItem