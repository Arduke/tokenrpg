import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MenuBar from './componentes/menuBar/MenuBar';
import LoginComponent from './componentes/loginComponent/LoginComponent';
import AtributoPage from './pages/atributoPage/AtributoPage';
import CharPage from './pages/charPage/charPage';
import CreateCharPage from './pages/createCharPage/createCharPage';


const Routes = () => {
    return (
    <BrowserRouter>
        <div>
            <MenuBar/>
            <Switch>
                <Route exact={true} path="/" component={LoginComponent}/>
                <Route path='/CharPage' component={CharPage}/>
                <Route path='/AtributoPage' component={AtributoPage}/>
                <Route path='/CreateCharPage' component={CreateCharPage}/>
            </Switch>
        </div>
    </BrowserRouter>
    )
};

export default Routes;