import css from "../components/Input/Input.module.css";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function PaginaLivro() {
    const [livro, setLivro] = useState({});
    const {id} = useParams();

    async function buscarLivro() {
        let busca = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro/" + id, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        })

        busca = await busca.json()

        setLivro(busca.livro);

        console.log(busca);
    }

    useEffect(function () {
        buscarLivro()
    }, [])

    return (
        <section className={"container-fluid " + css.tela}>
            <div className="row align-items-center">
                <div className="col-md-4 col-6 align-items-center justify-content-center d-flex">
                    <img className="capa" src={livro.imagem}/>
                </div>
                <div className="col-md-8 col-6">
                    <h2>{livro.titulo}</h2>
                    <div className="justify-content-between d-flex">
                        <p><span>Autor: </span>{livro.autor}</p>
                        <p><span>Categoria: </span>{livro.categoria}</p>
                        <p><span>Faixa etária: </span>{livro.faixa_etaria}</p>
                    </div>
                    <p>{livro.descricao}</p>
                </div>
            </div>
        </section>
    )
}