import css from './Destaques.module.css'
import Livro from '../Livro/Livro.jsx'
import {useEffect, useState} from "react";


export default function Destaques({titulo, input}) {
    const [livros, setLivros] = useState([]);

    async function buscarLivros() {
        let buscaAutor = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro?autor=" + input, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        })

        buscaAutor = await buscaAutor.json()

        let buscaTitulo = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro?titulo=" + input, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        })

        buscaTitulo = await buscaTitulo.json()

        const busca = buscaAutor.livros.concat(buscaTitulo.livros)

        setLivros(busca);


    }

    useEffect(function () {
        buscarLivros()
    }, [input])


    return (
        <section className={"container " + css.tela}>
            <div className="row align-items-center">
                <div className="col-8">
                    <h3>{titulo}</h3>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center gap-3">
                    <button className={"btn btn-light " + css.btnRedondo}>
                            <span className="material-symbols-outlined">filter_list</span>
                    </button>
                    <select
                            className={"form-select form-select-sm " + css.select}>
                            <option>Ordenar por: Relevância</option>
                            <option>Mais recentes</option>
                            <option>Menor preço</option>
                    </select>
                </div>
            </div>


            <div className="row pt-5">
                {livros.map(function (livro) {
                    return (
                        <Livro
                            index = {livro.id}
                            link={livro.imagem}
                            categoria={livro.categoria}
                            titulo={livro.titulo}
                            autor={livro.autor}
                        />
                    )
                })}
            </div>
        </section>
)
}