import React from 'react';
import { NavLink } from 'react-router-dom';


const menu = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Clientes Surittec</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                            className="nav-link"
                            to={"/"} 
                            activeClassName={"active"} exact>
                                Listar
                        </NavLink>
                        <NavLink 
                            className="nav-link"
                            to={"/add"} 
                            activeClassName={"active"} exact>
                                Adicionar
                        </NavLink>
                    </ul>
                </div>
            </nav>

      </div>
    );
}

export default menu;