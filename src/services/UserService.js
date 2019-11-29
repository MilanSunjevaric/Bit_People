import User from '../model/User.js'

const fetchUser = () => {
    const url = 'https://randomuser.me/api/?results=15'


    return fetch(url)
        .then(res => res.json())             /* response koji je (text) prebacujemo preko json metode u objekat */
        .then(data => {

            const MyUsers = data.results.map(userData => {              /* pristupamo objektu koji smo dobili preko json metode, i pristupamo objektu i property-ju results koji je niz (objekata) i mapiramo ga. */
                return new User(userData)                             /* pravimo novi objekat User koji prima mapirane objekte kao svoju vrednost */
            })                               /* data - objekat (response sa APIja) , results - property od data objekta */
            return MyUsers                      /* MyUsers je niz User objekata */
        })

}

export { fetchUser }                         /* exportujemo funkciju fetchUser kao objekat koji koristimo u UserPage */

