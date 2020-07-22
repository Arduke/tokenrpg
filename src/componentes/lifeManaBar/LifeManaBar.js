import React, { Component } from 'react';
import "./LifeManaBar.css";
import {connect} from 'react-redux';


class LifeManaBar extends Component {
    state = {
        PercentMana: 100,
        PercentVida: 100,
        VidaMaxima: this.props.char.Atributos.forca * 10,
        VidaAtual: 0,
        ManaMaxima: this.props.char.Atributos.inteligencia * 10,
        ManaAtual: 0,
    }

    componentDidUpdate = () => {
        console.log(this.state.VidaAtual);
    }

    componentDidMount = () => {
        this.setState({VidaAtual: this.state.VidaMaxima});
        this.setState({ManaAtual: this.state.ManaMaxima});
    }
    
    adicionar = (barra)=>{
        if(barra === 'vida'){
            if(this.state.PercentVida < 100) {
            this.setState({PercentVida: this.state.PercentVida+1, VidaAtual: this.state.VidaAtual+(this.state.VidaMaxima*0.01)})
            }
            
        } else {
            if(this.state.PercentMana < 100) {
                this.setState({PercentMana: this.state.PercentMana+1, ManaAtual: this.state.ManaAtual+(this.state.ManaMaxima*0.01)})
                }
        }
    }

    diminuir = (barra)=> {
        if(barra === 'vida'){
            if(this.state.PercentVida <= 100 && this.state.PercentVida >= 0) {
            this.setState({PercentVida: this.state.PercentVida-1, VidaAtual: this.state.VidaAtual-(this.state.VidaMaxima*0.01)})
            }
        } else {
            if(this.state.PercentMana <= 100 && this.state.PercentMana >= 0) {
                this.setState({PercentMana: this.state.PercentMana-1, ManaAtual:this.state.ManaAtual-(this.state.ManaMaxima*0.01)})
                }
        }
    }


    render(){
        return(
            <div className="ui form">
                <div className="Stats">
                        <div className="ProgressBar field" >
                            <div style={{backgroundColor:`red` ,width: `${this.state.PercentVida}%`}} className="Life">{this.state.VidaMaxima}/{this.state.VidaAtual}</div>
                        </div>
                        <div className="field">
                            <button onClick={()=> {this.adicionar("vida")}} className="ui button">Curar</button>
                            <button onClick={()=> {this.diminuir("vida")}}className="ui button">Dano</button>
                        </div>
                        <div className="ProgressBar field" >
                            <div style={{backgroundColor:`blue` ,width: `${this.state.PercentMana}%`}} className="Life">{this.state.ManaMaxima}/{this.state.ManaAtual}</div>
                        </div>
                        <div className="field">
                            <button onClick={()=> {this.adicionar("mana")}} className="ui button">Curar</button>
                            <button onClick={()=> {this.diminuir("mana")}} className="ui button">Dano</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect()(LifeManaBar);