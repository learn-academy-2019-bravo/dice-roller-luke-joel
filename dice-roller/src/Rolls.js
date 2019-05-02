import React, {Component} from 'react';

class Rolls extends Component {
    constructor (props) {
        super (props)
            this.state = {

            }
    }
    // diceRoll = () => {
    //     let {diceNumber} = this.state
    //     let randomNumber =
    //     this.setState({diceNumber: randomNumber})
    // }
    // //
    // diceHistory = () => {
    //     let { diceArray } = this.state
    //

    render(){
        let {diceArray, diceHistory, diceNumber} = this.props
        return (
        <div className="App">
            <button onClick = {diceHistory} className = {`dot${diceNumber}`}>
            </button>
        </div>
      );
    }
}
// [diceArray.length-1]
export default Rolls;
