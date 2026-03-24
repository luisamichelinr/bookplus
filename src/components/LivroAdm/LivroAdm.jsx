import css from './LivroAdm.module.css'
import {Link} from "react-router-dom";


export default function LivroAdm({index, link, categoria, titulo, autor}) {
    return (
        <div key={index} className="col-md-3 col-6 d-flex flex-column justify-content-center gap-3">
            <Link className="" to={"/livro/" + index}>
                <img key={index} className={css.capa} src={link} alt="Capa do livro"/>
                <div className="d-flex flex-column">
                    <p className={css.categoria}>{categoria}</p>
                    <h4 className={css.titulo}>{titulo}</h4>
                    <p className={css.autor}>{autor}</p>
                    <div className="mb-5 d-flex justify-content-end">
                        <Link to={"/editarlivro"} className={"btn btn-outline-dark " + css.botao}>Cadastro</Link>
                        <Link to={"/deletarlivro"} className={"btn btn-outline-dark " + css.botao}>Cadastro</Link>
                    </div>
                </div>
            </Link>

        </div>
    )
}