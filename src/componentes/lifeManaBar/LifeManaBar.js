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

    

    componentDidUpdate = () => {
    }

    componentDidMount = () => {
    }
    
    adicionar = (barra)=>{
        /*
        if(barra === 'vida'){
            if(this.state.PercentVida < 100) {
            this.setState({PercentVida: VidaAtual/VidaMaxima, VidaAtual: this.state.VidaAtual+(VidaMaxima*0.01)})
            }
            
        } else {
            if(this.state.PercentMana < 100) {
                this.setState({PercentMana: this.state.PercentMana+1, ManaAtual: this.state.ManaAtual+(ManaMaxima*0.01)})
            }
        }*/
    }

    diminuir = (barra)=> {
       this.props.onClickDamage()
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
                            
                            <button onClick={()=> {this.diminuir("vida")}}className="ui button">Dano</button>
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