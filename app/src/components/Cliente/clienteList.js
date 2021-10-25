import React, { Component } from 'react';
import Cliente from './cliente'
import axios from 'axios';

class ClienteList extends Component {
    state = {
        clientes: []
    }

    componentDidMount() {
        this.getCliente();
    }

    getCliente(){
        axios.get('http://localhost:8080/surittec/cliente/').then(res => {
            this.setState({ clientes: res.data.clientes });
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
        });
    }

    onClienteRefresh(){
        this.getCliente();
    }

    render() {
        let clientesElems = this.state.clientes.map(c => {
            return (
                <Cliente key={c.id} cliente={c} onUpdate={() => this.onClienteRefresh()} />
            );
        });

        return (
            <div>
                <h1>Lista de clientes</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm border border-dark"><b>Nome</b></div>
                        <div className="col-sm border border-dark"><b>CPF</b></div>
                        <div className="col-sm"></div>
                        <div className="col-sm"></div>
                    </div>
                    {clientesElems}
                </div>
            </div>
        );
    }
}

export default ClienteList;