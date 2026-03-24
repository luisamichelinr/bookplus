import css from '/src/components/Destaques/Destaques.module.css'
import LivroAdm from "/src/components/LivroAdm/LivroAdm.jsx";
import {useEffect, useState} from "react";

export default function ListaAdm() {
    const [livros, setLivros] = useState([]);

    async function buscarLivros() {
        let busca = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        })

        busca = await busca.json();
        setLivros(busca.livros);


    }

    useEffect(function () {
        buscarLivros()
    }, [])



    return (
        <section className={"container " + css.tela}>
            <div className="row align-items-center">
                <div className="col-8">
                    <h3>Painel de administrador</h3>
                </div>
            </div>


            <div className="row pt-5">
                {livros.map(function (livro) {
                    return (
                        <LivroAdm
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