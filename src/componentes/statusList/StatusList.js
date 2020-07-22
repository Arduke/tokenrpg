import React, { Component } from "react";
import "./StatusList.css";
import {connect} from "react-redux";
import {UpdateChar,SelectChar} from '../../actions/index';

class StatusList extends Component {
    state = {
        destreza: '',
        forca: '',
        inteligencia: '',
    }

    componentDidMount = () => {
        this.setState({
            destreza: this.props.char.Atributos.destreza,
            forca: this.props.char.Atributos.forca,
            inteligencia: this.props.char.Atributos.destreza,
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.UpdateChar({...this.props.char, Atributos: {destreza: this.state.destreza, inteligencia: this.state.inteligencia, forca: this.state.forca}});
        this.props.SelectChar({...this.props.char, Atributos: {destreza: this.state.destreza, inteligencia: this.state.inteligencia, forca: this.state.forca}})
    }

    render() {
        return (
            <div className="statusbar"> 
                <div className="FormStatsPoint">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className= "fields">
                            <div className= "field">
                            <label>Dexterity</label>
                            <input
                                value={this.state.destreza || ''}
                                onChange={(e)=>this.setState({destreza: e.target.value})}
                            />
                            </div>
                            <div className= "field">
                            <label>Strength</label>
                            <input
                                value={this.state.forca || ''}
                                onChange={(e)=>this.setState({forca: e.target.value})}
                            />
                            </div>
                            <div className= "field">
                            <label>Intelligence</label>
                            <input
                                value={this.state.inteligencia || ''}
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
        )
    }
};



export default connect(null,{UpdateChar,SelectChar})(StatusList);