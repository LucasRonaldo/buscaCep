import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";


import styles from "../App.module.css"
import Footer from "./Footer";
import Header from "./Header";


const BuscaCep = () => {

    const [cep, setCep] = useState<string>("");
    const [localidade, setLocalidade] = useState<string>("");
    const [uf, setUf] = useState<string>("");
    const [Erro, setErro] = useState<string>("")

    const findCep = (e: FormEvent) => {
        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/',
            {
                method: 'GET'
            }
        ).then(response => response.json())
            .then(
                data => {
                    setLocalidade(data.localidade);
                    setCep(data.cep);
                    setUf(data.uf);
                    setErro("");
                }
            ).catch(error => {
                setErro("Pesquisa Inválida");
            });


    }

    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name = "cep") {
            setCep(e.target.value);
        }

    }
    return (
        <div>
            <Header />
            <main className={styles.main}>
                
<div className="row">
    <center>
                    <div className='col-5'>
                        <label htmlFor="cep" className='form-label' >CEP</label>
                        <div className="container-fluid">
                                    <form className="d-flex" onSubmit={findCep} >
                                        <input name="cep" className="form-control me-2" required type="text" onChange={submitForm} placeholder="Pesquisar CEP"   />
                                        <input className="btn btn-outline-success" value="Pesquisar" type="submit"/>
                                    </form>
                                </div>
                        
                        
                    </div>
                   
                    </center>
                    </div>

                   
                   
                    
                


                <p>Cidade: {localidade} </p>
                <p>Estado:{uf} </p>
                <p>CEP: {cep}   </p>
                <p className={styles.error}>{Erro}</p>
            </main>
            <Footer />
        </div>
    );
}

export default BuscaCep