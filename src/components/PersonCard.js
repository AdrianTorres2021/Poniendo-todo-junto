import { Component } from 'react'

class PersonCard extends Component{
    //state={}
    state = {Age: this.props.age}

    onIncrement=()=>{
        this.setState((prevstate => ({Age: prevstate.Age+1})))
    }

    render(){
        const { Age } = this.state
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.onIncrement}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}
export default PersonCard