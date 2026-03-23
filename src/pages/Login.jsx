import css from "../components/Input/Input.module.css";
import Input from "../components/Input/Input.jsx";
import {Link} from "react-router-dom";


export default function Login() {
    return (
        <section className={"container-fluid " + css.tela}>
            <div className="row align-items-center">
                <div className="col-md-6 col-6">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Siga as instruções para realizar o login</p>

                    <form>
                        <div className="mt-5 mb-3">
                            <Input
                                label={"Usuário"}
                                type={"e-mail"}
                                placeholder={"nome@email.com"}
                            />
                        </div>
                        <div className="mb-5">
                            <Input
                                label={"Senha"}
                                type={"password"}
                                placeholder={"Sua senha"}
                            />
                        </div>
                        <div className="mb-5 d-flex justify-content-end">
                            <button type="submit" className={"btn btn-dark " + css.botao}>Login</button>
                        </div>
                    </form>
                    <div className="mb-5 d-flex justify-content-end gap-3">
                        <Link to={"/cadastro"} className={"btn btn-outline-dark " + css.botao}>Cadastro</Link>
                    </div>
                </div>
                <div className="col-md-6 col-6 align-items-end justify-content-end d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiu3VZC6oEzWcxp4_x48Z0qug59r8DfHVEaw&s"/>
                </div>
            </div>
        </section>
    )
}