import React, { Component } from 'react';
import "./PopUp.css";
import {Link} from 'react-router-dom';

class PopUp extends Component{
    setVisiblePopUp = () => {
        if(this.props.visible) {
        return ( 
        <div className="popUp">
            <div className="cartao ui card">
                <div className="ui content ">
                    <div className="ui description"> 
                        {this.props.text}
                    </div>
                </div>
                <div className="ui extra content">
                    <Link 
                    onClick={()=>this.props.onConfirm()}
                    className="ui basic green button"
                    to ='/CharPage'
                    >Sim</Link>
                    <div 
                    onClick={()=>this.props.onClose()} 
                    className="ui basic red button"
                    >Não</div>
                </div>
            </div>
        </div> 
        )
        } else {
            return <div>{null}</div>
        }
    }
    
    render(){
        return (
            <div>
                {this.setVisiblePopUp()}
            </div>
        )
    }
}




export default PopUp;