import css from './Footer.module.css'


export default function Footer() {
    return (
        <footer className="container ">
            <div className="row">
                <div className={"col-12 " + css.linha}></div>
                <div className="col-md-6 col-12 align-items-start">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex gap-md-2 gap-4 align-items-center">
                                <span className="material-symbols-outlined text-3xl">auto_stories</span>
                                <span className={css.titulo}>BOOK PLUS</span>
                            </div>
                            <p className={css.descricao}>
                                Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para
                                o seu crescimento.
                            </p>
                        </div>
                        <div className="col-md-12 d-flex gap-md-3 gap-5 pt-4">
                            <a className={"btn btn-light " + css.btnRedondo}
                               href="#">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a className={"btn btn-light " + css.btnRedondo}
                               href="#">
                                <span className="material-symbols-outlined text-xl">favorite</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                        <h4 className="">Explorar</h4>
                        <nav className="d-flex flex-column gap-3">
                            <a className={css.cinza} href="#">Lançamentos</a>
                            <a className={css.cinza} href="#">Mais Vendidos</a>
                            <a className={css.cinza} href="#">E-books</a>
                        </nav>
                </div>
                <div className="col-md-2 col-6">
                        <h4 className="">Suporte</h4>
                        <nav className="d-flex flex-column gap-3">
                            <a className={css.cinza} href="#">Ajuda</a>
                            <a className={css.cinza} href="#">Envios</a>
                            <a className={css.cinza} href="#">Trocas</a>
                        </nav>
                </div>
                <div className="col-md-2 col-6">
                        <h4 className="">Institucional</h4>
                        <nav className="d-flex flex-column gap-3">
                            <a className={css.cinza} href="#">Sobre Nós</a>
                            <a className={css.cinza} href="#">Contato</a>
                            <a className={css.cinza} href="#">Privacidade</a>
                        </nav>
                </div>
                <div className="row pt-5 mt-5 pb-5">
                    <div className="col-md-6 col-12">
                        <div className={css.rodape}>
                                © 2024 Book Plus. Todos os direitos reservados.
                        </div>
                    </div>
                    <div className="col-md-6 col-12 align-items-center d-flex justify-content-md-end justify-contet-center gap-2">
                            <span
                                className={css.rodape}>Desenvolvido com</span>
                                <span className={"material-symbols-outlined text-sm text-red-400 fill-1 " + css.rodape }>favorite</span>
                                <span className={css.rodape}>em SENAI</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}