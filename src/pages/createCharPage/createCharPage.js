import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddChar} from '../../actions';
import PopUp from '../../componentes/popUp/PopUp';


class CreateCharPage extends Component {
    state = {
        Nome: '',
        Raca: '',
        Idade: '',
        Classe: '',
        Historia: '',
        visible: false,
    };

    setVisible = (bool) => {
        this.setState({visible: bool})
    }

    onInputClick =(event) =>{
        event.preventDefault();
        this.setVisible(true);
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.onInputClick} className="ui form">
                    <div className="fields">
                        <div className="field">
                            <label>Name</label>
                            <input
                                onChange={(event) =>  this.setState({Nome: event.target.value})} 
                                type="text"  
                                placeholder="Name"></input>
                        </div>
                        <div className="field">
                            <label>Raça</label>
                            <input 
                                onChange={(event) =>  this.setState({Raca: event.target.value})} 
                                type="text"  
                                placeholder="Elf, Human, Orc"></input>
                        </div>
                        <div className="field">
                            <label>Idade</label>
                            <input
                                onChange={(event) =>  this.setState({Idade: event.target.value})} 
                                type="text"  
                                placeholder="24 years, two centuries"></input>
                        </div>
                        <div className="field">
                            <label>Class</label>
                            <input 
                                onChange={(event) =>  this.setState({Classe: event.target.value})}
                                type="text"  
                                placeholder="Hunter, Warrior, Mage"></input>
                        </div>
                    </div>
                    <div className="field">
                            <label>Lore</label>
                            <textarea
                                onChange={(event) =>  this.setState({Historia: event.target.value})}
                            ></textarea>
                    </div>
                    <button className="ui button" type="submit">Create</button>
                </form>
                <PopUp  visible={this.state.visible} 
                        onConfirm={()=> this.props.AddChar({
                            Nome: this.state.Nome,
                            Raca: this.state.Raca,
                            Idade: this.state.Idade,
                            Classe: this.state.Classe,
                            Historia: this.state.Historia,
                            Id: '',
                            DataCreate: "",
                            Level: 1,
                            VidaMaxima: 10,
                            ManaMaxima: 10,
                            ManaAtual: 10,
                            VidaAtual: 10,
                            Atributos: {destreza: 1, inteligencia: 1, forca: 1}, 
                        })} 
                        onClose={()=> this.setVisible(false)} text="Tem certeza que deseja criar este personagem?"/>
            </div>
        )
    }
}

//lembrar de arrumar o objeto enviado para criação de personagem, pq ta indo o "visible: false" junto. (arrumado)

const mapStateToProp = (state) => {
    return {redux: state}
}




export default connect(mapStateToProp,{AddChar})(CreateCharPage);