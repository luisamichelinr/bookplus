import css from './Banner.module.css'


export default function Banner() {
    return (
        <section className={"container-fluid " + css.banner}>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-8 d-flex flex-column justify-content-center align-items-start gap-4">
                        <span className={css.curadoria}>
                            Curadoria Exclusiva
                        </span>
                        <h2 className>
                            Descubra seu próximo capítulo
                        </h2>
                        <p className="">
                                Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e
                                contemporâneas.
                        </p>
                        <div className="d-flex gap-3">
                                <a className={"btn btn-outline-dark " + css.botao}
                                   href="#catalogo">
                                    Explorar Catálogo
                                </a>
                                <a className={"btn btn-dark " + css.botao}
                                   href="#">
                                    Ver Promoções
                                </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}