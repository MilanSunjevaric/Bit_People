import React from 'react'
import GridItem from './GridItem'

const GridDiv = (props) => {


    const userGridItems = props.users.map(user => {           /* mapiramo niz(objekata, sto smo videli iz console.log-a) iz kog svaki objekat prosledjujemo userListItem-u i pozivamo isti.  */

        return <GridItem user={user} />
    })
    console.log(userGridItems)

    return (
        <div className="row" >
            {userGridItems}
        </div>

    )

}

export default GridDiv
