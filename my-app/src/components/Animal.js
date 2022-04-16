import React, { Component } from 'react';
import catPhoto from "../img/cat.svg"
import dogPhoto from "../img/dog.svg"
import pandaPhoto from "../img/panda.svg"

class Animal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            map: {
                dog : dogPhoto,
                cat : catPhoto,
                panda : pandaPhoto,
            }, 
            animal : props.animalType
        }
    }

    selectAnimal = (newAnimal) => {
        this.setState({animal: newAnimal})
    }

    render() {
        console.log(this.state.animal)
        return (
            <div>
                <img src={this.state.map[this.state.animal]} alt="Buddy"></img>
            </div>
        );
    }
}

export default Animal;