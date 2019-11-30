import React from 'react';

import Header from './components/Header.js'
import UsersPage from './Users/UsersPage.js'
import Footer from './components/Footer.js'
import './App.css';
import Main from './components/Main.js'


class App extends React.Component {

  render() {
    return (
      <div>
        <Header title='My React Blog' />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App






// const App = (props) => {
//   return (
//     <div>   {/* moze i prazan element <> </> ako necu div */}

//       <Header title='My React Blog' />       {/* poziv f-je koji se evaluira na react element, title sa vrednostima se prosledjje headeru kao objekat (argument) parametru props*/}
//       <UsersPage />
//       <Footer />


//     </div>
//   )
// }


// export default App;
