import React from 'react'         /* ovo moram da pisem jer se evaluira u react element  */
import ReactTimeAgo from 'react-time-ago'

const Footer = (props) => {
    return (

        <footer class="page-footer">
            <div class="container kanta">
                <p> © 2014 Copyright Text</p>
                <p className='Upload'>Last time updated: <span>{<ReactTimeAgo date={new Date()} />}</span></p>
            </div>
        </footer>


    )
}

export default Footer