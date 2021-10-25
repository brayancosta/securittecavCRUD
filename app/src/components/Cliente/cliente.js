import React, { Component } from 'react';
import axios from 'axios';

class Cliente extends Component {
    
    state = {
        edit: false,
        cliente: {...this.props.cliente}
    }

    handleDelete = (event) =>{
        
        axios.delete('http://localhost:8080/surittec/cliente/deletecliente/', {data: this.props.cliente}).then(res => {
            this.props.onUpdate();

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

        let editedCliente = {...this.state.cliente};
        editedCliente[name] = value;

        this.setState({cliente: editedCliente});

    }
    
    toogleEdit = () =>{
        this.setState({edit: !this.state.edit});
    }

    saveEdit = () =>{

        axios.put('http://localhost:8080/surittec/cliente/updatecliente/', this.state.cliente).then(res => {
            this.toogleEdit();
            this.props.onUpdate();
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

    render() {
        let cliente = this.props.cliente;
        let info;

        if(!this.state.edit){ 
            info = 
            <>
                <div className="col-sm border">{cliente.nome}</div>
                <div className="col-sm border">{cliente.cpf}</div>
                <div className="col-sm border border-white"><button type="button" className="btn btn-warning" onClick={this.toogleEdit}>Editar</button></div>
            </>;
        }
        else{
            info =
            <>
                <div className="col-sm border">
                    <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" value={this.state.cliente.nome} onChange={this.handleChange} /> 
                </div>
                <div className="col-sm border">
                    <input type="text" className="form-control" id="cpf" name="cpf" placeholder="Seu nome" value={this.state.cliente.cpf} onChange={this.handleChange} /> 
                </div>
                <div className="col-sm border border-white"><button type="button" className="btn btn-success" onClick={this.saveEdit}>Salvar</button></div>
            </>;
        }


        return (
            <div className="row">
                {info}
                <div className="col-sm border border-white"><button type="button" className="btn btn-danger" onClick={this.handleDelete}>Excluir</button></div>
            </div>

        );
    }
}

export default Cliente;