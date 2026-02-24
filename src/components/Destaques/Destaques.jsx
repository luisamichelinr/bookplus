import css from './Destaques.module.css'
import Livro from '../Livro/Livro.jsx'


export default function Destaques() {
    return (
        <section className={"container " + css.tela}>
            <div className="row align-items-center">
                <div className="col-12 d-flex align-items-start gap-4">
                    <p className={css.novidades}>Novidades</p>
                </div>
                <div className="col-8">
                    <h3>Destaques da Semana</h3>
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
                <Livro
                    link={"https://m.media-amazon.com/images/I/91WKPd60P4L.jpg"}
                    categoria={"Ficção"}
                    titulo={"O Sol é para Todos"}
                    autor={"Harper Lee"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg"}
                    categoria={"Distopia"}
                    titulo={"Jogos Vorazes"}
                    autor={"Suzane Collins"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/81SPvywH9sL._AC_UF1000,1000_QL80_.jpg"}
                    categoria={"Ficção Científica"}
                    titulo={"Duna"}
                    autor={"Frank Herbert"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/81hCVEC0ExL.jpg"}
                    categoria={"Fantasia"}
                    titulo={"O Senhor dos Anéis"}
                    autor={"J.R.R. Tolkien"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/719esIW3D7L.jpg"}
                    categoria={"Romance"}
                    titulo={"Orgulho e Preconceito"}
                    autor={"Jane Austen"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/91g9Dvtf+jL._UF350,350_QL50_.jpg"}
                    categoria={"Terror"}
                    titulo={"It: A Coisa"}
                    autor={"Stephen King"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/71yJLhQekBL._AC_UF1000,1000_QL80_.jpg"}
                    categoria={"Aventura"}
                    titulo={"As Crônicas de Nárnia"}
                    autor={"C.S. Lewis"}
                />
                <Livro
                    link={"https://m.media-amazon.com/images/I/91tOJgXRfzL.jpg"}
                    categoria={"Ficção Histórica"}
                    titulo={"O Diário de Anne Frank"}
                    autor={"Anne Frank"}
                />
            </div>
            <div>
                <div className="row pt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <a className={"btn btn-outline-dark " + css.botao}>Ver Catálogo Completo</a>

                    </div>
                </div>
            </div>
        </section>
)
}