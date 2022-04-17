import './Animal.css';
import React, { Component } from 'react';
import catPhoto from "../img/cat.svg"
import dogPhoto from "../img/dog.svg"
import pandaPhoto from "../img/panda.svg"
import catHeadPhoto from "../img/cat head.svg"
import dogHeadPhoto from "../img/dog head.svg"
import pandaHeadPhoto from "../img/panda head.svg"

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
        return (
            
            <div>
                <img src={this.state.map["cat"]} alt="Buddy"></img>
            </div>
        );
    }
}

export default Animal;