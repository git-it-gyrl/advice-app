import React, { Component } from "react";
import AdvicePage from './container/AdvicePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdvicePage />
      </div>
    );
  }
}

export default App;



// import React from 'react';
// import './Layout.jsx';

// const url = 'http://localhost:3001/'


// class App extends React.Component {
//     state = {
//         advice:" "
//     };

//     componentDidMount() {
//         fetch(url)
//             .then(res=> res.json())
//             .then(advice => this.setState({advice:advice}))
//     }
   
//     // addAdvice =()=> {
//     //     console.log(advice)
//     // }
   
//     // handleDelete

//     render() {
//         return (
//             // placeholder
//             <p>Welcome</p> 
//         );
//     }
// }
// export default App;