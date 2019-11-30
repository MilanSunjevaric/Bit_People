import React from 'react'

const Grid = (props) => {                           /* kartica sa slikom i podacima */
    let genderClass = '';
    if (props.user.gender === "female") {
        genderClass = 'female'
    }
    return (
        <div class={`col s12 m4 ${genderClass}`} >
            <div class="card">
                <div class="card-image">
                    <img src={props.user.image} />

                </div>
                <div class="card-content">
                    <span>Name: {props.user.name}</span>
                    <br />
                    <span>Email: {props.user.getHiddenEmail()}</span>
                </div>
            </div>
        </div >


    )



}
export default Grid