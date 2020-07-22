import React, { Component } from 'react';
import LifeManaBar from "../../componentes/lifeManaBar/LifeManaBar";
import StatusList from '../../componentes/statusList/StatusList';
import {connect} from 'react-redux';
import {UpdateChar} from '../../actions/index';

class AtributoPage extends Component {
    componentDidMount = () => {
    }

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
            return (<div>
                <div>
                    <div className="LifeManaPoint">
                        <div>
                        <LifeManaBar char = {this.props.charSelect.caracter} updateChar = {this.props.UpdateChar}>
                        </LifeManaBar>
                        </div>
                    </div>
                <div>
                    <StatusList char = {this.props.charSelect.caracter}/>
                </div>
                </div>
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

export default connect(mapStateToProps,{UpdateChar})(AtributoPage);
