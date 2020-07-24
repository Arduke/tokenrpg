import React, {Component} from "react";
import "../popUpPoints/PopUpPoints.css";
import {connect} from "react-redux";
import {UpdateChar,SelectChar} from '../../actions/';

class PopUpPoints extends Component {
    state = {
        Dano: 0,
        Fonte: 0,
    }

    damageTaken = (event) => {
        event.preventDefault();
        this.props.onClickDamage()
        this.props.UpdateChar({...this.props.charSelect, VidaAtual: this.props.charSelect.VidaAtual - this.state.Dano });
        this.props.SelectChar({...this.props.charSelect, VidaAtual: this.props.charSelect.VidaAtual - this.state.Dano });
    }
    
    render(){
        if(this.props.visible){
            return (
                <div className="popUpPoint">
                    <div className="cartao">
                        <form onSubmit={this.damageTaken} className="ui form">
                            <div className="field">
                            <label>Dano sofrido</label>
                            <input onChange={(e)=> this.setState({Dano: e.target.value})} type="text"></input>
                            </div>
                            <div className="field">
                            <label>Fonte do dano</label>
                            <input onChange={(e)=> this.setState({Fonte: e.target.value})} type="text"></input>
                            </div>
                            <div className="ui card">
                            <button className="ui button" type="submit">confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return <div></div>;
        }
    }
}

const mapStateToProps = (state) => {
    return {charSelect: state.charSelect}
}

export default connect(mapStateToProps, {UpdateChar,SelectChar})(PopUpPoints);