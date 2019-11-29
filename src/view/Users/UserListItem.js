import React from 'react'

const UserListItem = (props) => {                           /* kartica sa slikom i podacima */
    return (
        // <li class="collection-item avatar">


        //     <img src={props.user.image} alt="" class="circle" />
        //     <p>Name: {props.user.name}</p>
        //     <p>Email: {props.user.email}</p>
        //     <p>Date of birth: {props.user.dob}</p>

        // </li>
        <li className="collection-item avatar" >
            <img src={props.user.image} alt="" className="circle" />        {/* prolazimo kroz propse, tj pristupamo objektima koje smo dobil iz niza userItems iz userList-a */}
            <span className="title">{props.user.name}</span>
            <p> <i class="tiny material-icons">email</i>{props.user.getHiddenEmail()} <br />
                <i class="tiny material-icons">cake</i> {props.user.dob}
            </p>
        </li>
    )

}
export default UserListItem