import css from './Livro.module.css'
import {Link} from "react-router-dom";


export default function Livro({index, link, categoria, titulo, autor}) {
    return (
        <div key={index} className="col-md-3 col-6 d-flex flex-column justify-content-center gap-3">
            <Link className="" to={"/livro/1"}>
                <img key={index} className={css.capa} src={link} alt="Capa do livro"/>
                <div className="d-flex flex-column">
                    <p className={css.categoria}>{categoria}</p>
                    <h4 className={css.titulo}>{titulo}</h4>
                    <p className={css.autor}>{autor}</p>
                </div>
            </Link>

        </div>
    )
}