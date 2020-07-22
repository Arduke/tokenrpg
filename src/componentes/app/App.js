import React from "react";
import "../app/App.css"
import Routes from '../../routes';
import { BrowserRouter} from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <div className="fundo">
                <Routes/>
            </div>
        </BrowserRouter>
    )
}

export default App;
