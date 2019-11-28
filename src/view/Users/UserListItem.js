import React from 'react'

const UserListItem = (props) => {                           /* kartica sa slikom i podacima */
    return (
        <li class="collection-item avatar">


            <img src={props.user.image} alt="" class="circle" />
            <p>Name: {props.user.name}</p>
            <p>Email: {props.user.email}</p>
            <p>Date of birth: {props.user.dob}</p>

        </li>
    )
}
export default UserListItem