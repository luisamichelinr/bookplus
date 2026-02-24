import css from './Destaques.module.css'
import Livro from '../Livro/Livro.jsx'


export default function Destaques() {
    return (
        <section className={"container " + css.tela}>
            <div className="row">
                <div className="col-12 d-flex align-items-start gap-4">
                    <p className={css.novidades}>Novidades</p>
                </div>
                <div className="col-8">
                    <h3>Destaques da Semana</h3>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center gap-3">
                    <button className="btn btn-light">
                            <span className="material-symbols-outlined">filter_list</span>
                    </button>
                    <select
                            className="form-select form-select-sm">
                            <option>Ordenar por: Relevância</option>
                            <option>Mais recentes</option>
                            <option>Menor preço</option>
                    </select>
                </div>
            </div>
            <div className="row pt-5">
                    <Livro/>
                    <Livro/>
                    <Livro/>
                    <Livro/>
                    <Livro/>
                    <Livro/>
                    <Livro/>
                <div className="row pt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <a className={"btn btn-outline-dark " + css.botao}>Ver Catálogo Completo</a>

                    </div>
                </div>
            </div>
        </section>
)
}