import css from "../components/Input/Input.module.css";
import Input from "../components/Input/Input.jsx";
import {useState} from "react";

export default function Cadastro() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [faixa, setFaixa] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    let token = localStorage.getItem('token');


    function alterarTitulo(e) {
        setTitulo(e.currentTarget.value)
    }
    function alterarAutor(e) {
        setAutor(e.currentTarget.value)
    }
    function alterarFaixa(e) {
        setFaixa(e.currentTarget.value)
    }
    function alterarCategoria(e) {
        setCategoria(e.currentTarget.value)
    }
    function alterarDescricao(e) {
        setDescricao(e.currentTarget.value)
    }
    function alterarImagem(e) {
        setImagem(e.currentTarget.value)
    }

    async function cadastrarLivro() {
        let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                titulo: titulo,
                autor: autor,
                faixa_etaria: faixa,
                categoria: categoria,
                descricao: descricao,
                imagem: imagem,
                token: token,
            })
        })

        retorno = await retorno.json();

        console.log(retorno);
    }

    return (
        <section className={"container-fluid " + css.tela}>
            <div className="row align-items-center">
                <div className="col-md-6 col-6">
                    <h2>Cadastro de livro</h2>
                    <p>Siga as instruções para cadastrar o livro</p>

                    <div>
                        <div className="mt-5 mb-3">
                            <Input
                                label={"Título"}
                                type={"text"}
                                placeholder={"Livro dos livros"}
                                input={titulo}
                                setInput={alterarTitulo}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                label={"Autor"}
                                type={"text"}
                                placeholder={"Maria da Silva"}
                                input={autor}
                                setInput={alterarAutor}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                label={"Faixa etária"}
                                type={"text"}
                                placeholder={"Livre"}
                                input={faixa}
                                setInput={alterarFaixa}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                label={"Categoria"}
                                type={"text"}
                                placeholder={"Não ficção"}
                                input={categoria}
                                setInput={alterarCategoria}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                label={"Descrição"}
                                type={"textarea"}
                                placeholder={"Uma jornada de autoconhecimento com os livros..."}
                                input={descricao}
                                setInput={alterarDescricao}
                            />
                        </div>
                        <div className="mb-5">
                            <Input
                                label={"Capa"}
                                type={"text"}
                                placeholder={"Insira a capa"}
                                input={imagem}
                                setInput={alterarImagem}
                            />
                        </div>
                        <div className="mb-5 d-flex justify-content-end">
                            <button onClick={cadastrarLivro} className={"btn btn-dark " + css.botao}>Cadastrar livro</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-6 align-items-end justify-content-end d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiu3VZC6oEzWcxp4_x48Z0qug59r8DfHVEaw&s"/>
                </div>
            </div>
        </section>
    )
}