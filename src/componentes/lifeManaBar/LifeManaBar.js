import React, { Component } from 'react';
import "./LifeManaBar.css";
import {connect} from 'react-redux';


//melhorar essa lógica, por que ta muito feio e confuso.
//Ta um coco vergonhoso


class LifeManaBar extends Component {
    state = {
        PercentMana: 100,
        PercentVida: 100,
        ManaMaxima: 0,
        ManaAtual: 0,
    }

    render(){
        
        const {ManaMaxima,VidaMaxima,ManaAtual,VidaAtual} = this.props.charSelect;
        
        return(
            <div className="ui form">
                <div className="Stats">
                        <div className="ProgressBar field" >
                            <div style={{backgroundColor:`red` ,width: `${this.state.PercentVida}%`}} className="Life">{VidaAtual}/{VidaMaxima}</div>
                        </div>
                        <div className="field">
                            
                            <button onClick={()=> {this.props.onClickDamage()}}className="ui button">Dano</button>
                        </div>
                        <div className="ProgressBar field" >
                            <div style={{backgroundColor:`blue` ,width: `${this.state.PercentMana}%`}} className="Life">{ManaAtual}/{ManaMaxima}</div>
                        </div>
                        <div className="field">
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {charSelect: state.charSelect}
}


export default connect(mapStateToProps)(LifeManaBar);