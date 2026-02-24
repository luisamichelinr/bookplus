import css from './Livro.module.css'


export default function Livro() {
    return (
        <div className="col-md-3 d-flex flex-column gap-3">
            <img className={css.capa} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAURKfYJHJw6LLOsifFzm7CAan-Kw4sdvlY2yyE-RjNdqOuAhBvlXXJZBQSt01H_rmgrFGXhpsGxir_GPmSqxfW6zsRfFDKE1yyLi91QXM4ZltWse8vjQ5qwflgoj1jLHyhH8EmKzueAbeYhY-2ynolxHQxWikUS9t4-CZyLYjgy77QmqitnknAwAuHjuQchnjtv7CR6Z2Z3iwI3dD_cChz7-azkF60eFyKoHhjpOy8R8Xvtoe5PEsHZlL_ij7Unm-GwXENrTrkdpa-" alt="Capa do livro"/>
            <div className="d-flex flex-column">
                <p className={css.categoria}>Ficção</p>
                <h4 className={css.titulo}>O Alquimista</h4>
                <p className={css.autor}>Paulo Coelho</p>
            </div>
        </div>
    )
}