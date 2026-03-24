import css from "../components/Input/Input.module.css";
import Input from "../components/Input/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alerta, setAlerta] = useState('');
    const navigate = useNavigate();


    function alterarEmail(e) {
        setEmail(e.currentTarget.value)
    }

    function alterarSenha(e) {
        setSenha(e.currentTarget.value)
    }

    async function realizarLogin() {
        let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        })

        retorno = await retorno.json();


        if (retorno.token) {
            localStorage.setItem('token', retorno.token);
            localStorage.setItem('usuario_nome', retorno.usuario.nome);
            localStorage.setItem('usuario_email', retorno.usuario.email);
            navigate('/paineladm');

        } else {
            setAlerta("E-mail ou senha estão incorretos");
        }
    }

    return (
        <section className={"container-fluid " + css.tela}>
            <div className="row align-items-center">
                <div className="col-md-6 col-6">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Siga as instruções para realizar o login</p>
                    <span>{alerta}</span>

                    <div>
                        <div className="mt-5 mb-3">
                            <Input
                                label={"Usuário"}
                                type={"email"}
                                placeholder={"nome@email.com"}
                                input={email}
                                setInput={alterarEmail}
                            />
                        </div>
                        <div className="mb-5">
                            <Input
                                label={"Senha"}
                                type={"password"}
                                placeholder={"Sua senha"}
                                input={senha}
                                setInput={alterarSenha}
                            />
                        </div>
                        <div className="mb-5 d-flex justify-content-end">
                            <button onClick={realizarLogin} className={"btn btn-dark " + css.botao}>Login</button>
                        </div>
                    </div>
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