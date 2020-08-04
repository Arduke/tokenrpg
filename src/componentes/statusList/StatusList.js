import React, { Component } from "react";
import "./StatusList.css";
import {connect} from "react-redux";
import {UpdateChar,SelectChar} from '../../actions/index';
import LifeManaBar from "../../componentes/lifeManaBar/LifeManaBar";
import PopUpPoints from "../../componentes/popUpPoints/PopUpPoints";

class StatusList extends Component {
    state = {
        destreza: 0,
        forca: 0,
        inteligencia: 0,
        visible: false,
    }

    componentDidUpdate = () => {
    }
   
    componentDidMount = () => {
        this.setState({
            destreza: this.props.char.Atributos.destreza,
            forca: this.props.char.Atributos.forca,
            inteligencia: this.props.char.Atributos.destreza,
        })
    }
    
    onClickDamage = () => {
        this.setState({visible: !this.state.visible});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const {destreza,forca,inteligencia} = this.state;
        const {Level} = this.props.char;
        
        //não achei solução menos problematica que essa
        const destrezax = parseInt(destreza, 10)
        const forcax = parseInt(forca, 10)
        const inteligenciax = parseInt(inteligencia, 10)
        

        if((destrezax+forcax+inteligenciax)>(Level*10)){
            
        } else {
            this.props.UpdateChar({...this.props.char, Atributos: {destreza: destreza, inteligencia: inteligencia, forca: forca}, VidaMaxima: 10+(forca*10), ManaMaxima: 10+(inteligencia*10)});
            this.props.SelectChar({...this.props.char, Atributos: {destreza: destreza, inteligencia: inteligencia, forca: forca}, VidaMaxima: 10+(forca*10), ManaMaxima: 10+(inteligencia*10)});
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className="LifeManaPoint">
                        <div>
                        <LifeManaBar onClickDamage = {() => this.onClickDamage()}>
                        </LifeManaBar>
                        </div>
                    </div>  
                    <div className="levelbar">
                        <div className="ui Stackable Grid Container">
                            <div className="itenslavelbar ui labeled input">
                                <div className="ui label">
                                    Level: 
                                </div>
                                <input readOnly={true} className="ui input" value={this.props.char.Level}></input>
                            </div>
                            <div className="itenslavelbar ui labeled input">
                                <div className="ui label">
                                    Pontos: 
                                </div>
                                <input readOnly={true} className="ui input" value={(this.props.char.Level*10)}></input>
                            </div>
                        </div>
                    </div>    
                    <div className="statusbar"> 
                        <div className="FormStatsPoint">
                            <form onSubmit={this.onFormSubmit} className="ui form">
                                <div className= "fields">
                                    <div className= "field">
                                    <label>Dexterity</label>
                                    <input
                                        value={this.state.destreza}
                                        onChange={(e)=>this.setState({destreza: e.target.value})}
                                    />
                                    </div>
                                    <div className= "field">
                                    <label>Strength</label>
                                    <input
                                        value={this.state.forca}
                                        onChange={(e)=>this.setState({forca: e.target.value})}
                                    />
                                    </div>
                                    <div className= "field">
                                    <label>Intelligence</label>
                                    <input
                                        value={this.state.inteligencia}
                                        onChange={(e)=>this.setState({inteligencia: e.target.value})}
                                    />
                                    </div>
                                </div>
                                <div className = "field button">
                                    <button className="ui button" type="submit">Salvar Status</button>
                                </div>
                            </form> 
                        </div>  
                    </div>
                </div>
                <PopUpPoints onClickDamage = {() => this.onClickDamage()} visible={this.state.visible}/>
            </div>
        )
    }
};



export default connect(null,{UpdateChar,SelectChar})(StatusList);