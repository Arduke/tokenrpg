import React from "react";
import "../menuBar/MenuBar.css";
import {Link} from "react-router-dom";

const MenuBar = () => {
    return (
        <div className= "">
            <div className="Menu">
                <div className= "ui top attached tabular menu">
                        <Link to="/CharPage" className ="item">
                            Caracter List
                        </Link>
                        <Link to="/AtributoPage" className="item">
                            Status
                        </Link>
                        <div className="right menu">
                            <Link to="/" className="ui item">
                            Logout
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;