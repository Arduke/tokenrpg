import React from "react";
import "./LoginComponent.css";
import {Link} from 'react-router-dom';

const LoginComponent = () => {
    return (
        <div className="new-background">
            <div className="loginbase iu container">
                <div className="ui card">
                    <div className=" ui input field">
                        <div className="header">Login </div>
                        <input/>
                    </div>
                    <div className="field ui input">
                        <div className="header">Senha</div>
                        <input/>
                    </div>
                    <div className="ui button">
                        <Link to= "/CharPage">Acessar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;