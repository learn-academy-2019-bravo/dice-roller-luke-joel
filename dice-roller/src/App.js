import React, {Component} from 'react';
import Rolls from './Rolls.js'
import './App.css';

class App extends Component {
    constructor (props) {
        super (props)
        this.state = {
            diceNumber: 1,
            diceArray: [],
        }
    }

    diceHistory = () => {
        let { diceArray, diceNumber } = this.state
        let diceroller = Math.floor( Math.random() * 6 + 1 )
        this.setState({diceNumber: diceroller})
        diceArray.push(diceroller)
        this.setState({diceArray})
        console.log(diceArray);
    }


    render(){
      let {diceArray, diceNumber} = this.state
      return (
        <div>

            <Rolls
                diceHistory = {this.diceHistory}
                diceArray = {diceArray}
                diceNumber = {diceNumber}
                />
            <p>{diceArray}</p>
            <div className = "dots"></div>
        </div>
      );
    }
}
export default App;
