import React, { Component } from "react";
import "../listCaracters/ListCaracters.css"
import {connect} from 'react-redux';
import {SelectChar} from '../../actions';

class ListCaracters extends Component {
    


    showCaracterList = () => {
        if(this.props.redux.charList.length === 0) {
            return <div className="ui message">
                <div className="header">
                Sua lista esta vazia, crie seu primeiro personagem.
                </div>
                <p>Para criar um novo personagem é necessario clickar no botão criar personagem</p>
            </div>
        } else {
            const chars = this.props.redux.charList.map((caracter) =>{
                return (
                    <div className="Cards-Book" key = {caracter.Nome}>
                        <div onClick={()=>this.props.SelectChar(caracter)}className="ui card">
                            <div className="content">
                                <div className="header">{caracter.Nome}</div>
                                    <div className="meta">
                                        <p>{caracter.Classe}</p>
                                    </div>
                                    <div className="description">
                                    {caracter.Historia}
                                </div>
                            </div>
                            <div className="extra content">
                            <span className="right floated">
                            </span>
                            <span>
                                <i className=""></i>
                                <span className="left floated">Idade: {caracter.Idade}</span>
                            </span>
                            </div>
                        </div>
                    </div>
                )})  
                return chars;
        }
    }
    render () {
        return (
            <div className="charList">
                <div className="ui link cards">{this.showCaracterList()}</div>
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {redux: state}
}


export default connect(mapStateToProps,{SelectChar})(ListCaracters);

