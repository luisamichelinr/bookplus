import css from './Livro.module.css'


export default function Livro({link, categoria, titulo, autor}) {
    return (
        <div className="col-md-3 col-6 d-flex flex-column justify-content-center gap-3">
            <img className={css.capa} src={link} alt="Capa do livro"/>
            <div className="d-flex flex-column">
                <p className={css.categoria}>{categoria}</p>
                <h4 className={css.titulo}>{titulo}</h4>
                <p className={css.autor}>{autor}</p>
            </div>
        </div>
    )
}