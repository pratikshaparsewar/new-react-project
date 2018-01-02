import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent1 from './Parent.js';
import Parentnew from './Parentnew.js';
import Dummy from './dummy.js';


class App extends Component {
    constructor(props){
       super(props);
       this.state = {
            person: [
                { color:'red', name:'pratiksha'},
                { color:'blue', name:'pratiksha'} 
            ]
       };

       this.switchNameHandler = this.switchNameHandler.bind(this);
    };
    

    switchNameHandler( ) {
        // document.write("hello my name is pratiksha parsewar")
    }
      
    // constructor(props) {
    //     super(props);
    //     this.state = { sample:false,showWarning: false }
    //     this.prathikshaHnadler = this.prathikshaHnadler.bind(this);
    // }

    // prathikshaHnadler() {
    //     // this.setState({showWarning : this.state.showWarning});
    //     this.setState(currentState => ({
    //         showWarning: currentState.showWarning
    //     }));
    // }
    // WarningBanner(props) {
    //     if (props.text == true) {
    //         return ( <div >
    //             <input type = "text" name = "FirstName" value = "Mickey" placeholder = "Mickey" />
    //             </div>);
    //     } 
    //     else {
    //         return null;
    //     }
    // }

  
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React{this.state.name}</h1>
                </header>
                {/* <button onClick={this.switchNameHandler()}>button clicked</button>
                <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                <p>my name is {this.state.person[0].name} i am working in {this.state.person[0].name}.</p> */}
                  <Parentnew />
            </div>
           
        );
    }
}



export default App;