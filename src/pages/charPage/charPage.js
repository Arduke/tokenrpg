import React from 'react';
import ListCaracters from "../../componentes/listCaracters/ListCaracters";
import {Link} from 'react-router-dom';
import "../charPage/charPage.css";

const CharPage = () => {
    return (
        <div>
            <div className="ListCaracters">
                <ListCaracters/>
            </div>
            <div className="">
                <Link to="/CreateCharPage" className="fluid ui button">Create a new Caracter</Link>
            </div>
         </div>
    )
}

export default CharPage;