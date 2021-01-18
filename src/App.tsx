import React, { Component } from 'react';
import './App.css';
import Loginwidget from "./containers/loginwidget/loginwidget"

class App extends Component{

    state={
      'login' : false
    }

    switchLoginTab = (target: string)=>{
      target === 'signin' ? this.setState({'login': true}) : this.setState({'login': false});
    }

    responseGoogle = (response: any)=>{
      console.log(response);
    }

    render(){
      return(<div className="App">
      <header>
        Header
      </header>
      <main>
        <Loginwidget switchLoginTab={this.switchLoginTab} currentview={this.state.login} responseGoogle={this.responseGoogle}></Loginwidget>
      </main>
      <footer>
        Footer
      </footer>
    </div>);
    }

}

export default App;
