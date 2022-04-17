import './Animal.css';
import React, { Component } from 'react';
import catPhoto from "../img/cat.svg"
import dogPhoto from "../img/dog.svg"
import pandaPhoto from "../img/panda.svg"
import catHeadPhoto from "../img/cat-head.svg"
import dogHeadPhoto from "../img/dog-head.svg"
import pandaHeadPhoto from "../img/panda-head.svg"
import shadow from "../img/cat-shadow.svg"

class Animal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            map: {
                dog : dogPhoto,
                cat : catPhoto,
                panda : pandaPhoto,
            }, 
            animal : props.animalType,
            animalName: props.animalName
        }

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        console.log(e.target.value);
        this.setState({animal:e.target.value});
    }

    render() {
        return (
            <div>
                
                <div className='animal-image-wrapper'>
                    <img id="animal-image" src={this.state.map[this.state.animal]} alt="Buddy"></img>
                    <img id="shadow" src={shadow} alt="shadow" />
                </div>
                <div className='animal-name'>
                    {this.state.animalName}
                </div>
                <div className='home-animal-button'> 
                    <div className='animal-head'>
                        <label>
                            <img src = {catHeadPhoto} alt = "cat head" />
                            <input type="radio" name="avatar" value="cat" onChange={(e)=>{this.onChangeValue(e);}}/>
                        </label>
                    </div>   
                    <div className='animal-head'>
                        <label>
                            <img src = {dogHeadPhoto} alt = "dog head" />
                            <input type="radio" name="avatar" value="dog" onChange={(e)=>{this.onChangeValue(e);}}/>
                        </label>  
                    </div>
                    <div className='animal-head'>
                        <label>
                            <img src = {pandaHeadPhoto} alt = "panda head" />
                            <input type="radio" name="avatar" value="panda" onChange={(e)=>{this.onChangeValue(e);}}/>
                        </label>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Animal;