import css from './Header.module.css'

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div className="col-md-2 d-flex justify-content-around align-items-center">
                    <span className="material-symbols-outlined">auto_stories</span>
                    <h1 className="titulo">BOOK PLUS</h1>
                </div>
                <div className="col-md-5 d-flex align-items-center relative group">
                    <div
                        className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-navy">
                        <span className="material-symbols-outlined text-xl">search</span>
                    </div>
                    <form className="d-flex" role="search">
                        <input className={"form-control me-2 " + css.inputPesquisa} type="search" placeholder="Encontre sua próxima leitura..." aria-label="Search"/>
                    </form>
                </div>

                <div className="col-md-5 d-flex justify-content-end align-items-center">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-end ">
                        <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav gap-5">
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