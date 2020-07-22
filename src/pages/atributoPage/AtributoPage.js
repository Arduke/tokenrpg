import React, { Component } from 'react';
import StatusList from '../../componentes/statusList/StatusList';
import {connect} from 'react-redux';

class AtributoPage extends Component {
    
    charIsSelected = () =>{
        if (!this.props.charSelect) {
            return <div className="ui message">
                <div className="header">
                Você deveria selecionar um personagem antes
                </div>
                <p>Apenas volte a sua lista de personagens e selecione qual personagem você pretende observar os status</p>
                </div>;
        }
        else {
            return (
            <div>
                <StatusList char = {this.props.charSelect.caracter}/>
            </div>
            )
        }
    }

    render(){
        return (
            <div>
                <div className="ui container">
                    {this.charIsSelected()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {charSelect: state.charSelect};
}

export default connect(mapStateToProps)(AtributoPage);
