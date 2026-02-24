import css from './Header.module.css'

export default function Header() {
    return (
        <header className={"container-fluid "}>
            <div className={"row " + css.fixed}>
                <div className="col-md-2 col-4 d-flex gap-2 align-items-center">
                    <span className="material-symbols-outlined">auto_stories</span>
                    <h1 className="titulo">BOOK PLUS</h1>
                </div>
                <div className="col-md-4 col-6 d-flex align-items-center relative group">
                    <div className={"d-flex gap-2 " + css.pesquisa}>
                        <span className="material-symbols-outlined text-xl">search</span>
                        <input className={css.inputPesquisa} type="search" placeholder="Encontre sua próxima leitura..." aria-label="Search"/>
                    </div>
                </div>

                <div className="col-md-6 col-2 d-flex justify-content-end align-items-center">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-end ">
                        <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav justify-content-evenly">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">CATÁLOGO</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">LANÇAMENTOS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">MAIS VENDIDOS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={"btn btn-dark " + css.botao}>LOGIN ADMIN</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </header>


)
}