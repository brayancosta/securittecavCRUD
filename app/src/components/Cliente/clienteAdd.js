import React, { Component } from 'react';
import axios from 'axios';

class ClienteList extends Component {
    state = {
        nome: "",
        cpf: ""
    }

    componentDidMount() {
        this.setState({ nome: "", cpf: "" });

        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:8080/surittec/cliente/addcliente/', this.state).then(res => {
            this.setState({ nome: "", cpf: "" });

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

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    render() {
        return (
            <div>
                <h1>Adicionar um cliente</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" value={this.state.nome} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input type="text" className="form-control" id="cpf" name="cpf" placeholder="Seu CPF" value={this.state.cpf} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

            </div>
        );
    }
}

export default ClienteList;