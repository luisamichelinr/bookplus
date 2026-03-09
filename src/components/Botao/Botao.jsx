import css from './Botao.module.css'
import Livro from '../Livro/Livro.jsx'
import {Link} from "react-router-dom";



export default function Botao({nome, link}) {
    return (
        <section className={"container " + css.tela}>
                <div className="row pt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <Link className={"btn btn-outline-dark " + css.botao} to={link}>{nome}</Link>

                    </div>
                </div>
        </section>
)
}