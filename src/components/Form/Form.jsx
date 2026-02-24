import css from './Form.module.css'
import { useState } from 'react'


export default function Form() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function alterarEmail(e) {
        setEmail(e.currentTarget.value)
        console.log(email)
    }

    function alterarSenha(e) {
        setSenha(e.currentTarget.value)
        console.log(senha)
    }

    return (
        <section className={"container-fluid " + css.tela}>
            <div className="row align-items-center">
                <div className="col-md-6 col-6">
                    <h2>Bem-vindo de volta!</h2>
                    <p>Siga as instruções para realizar o login</p>

                    <form>
                        <div className="mt-5 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={alterarEmail} value={email}
                                   placeholder="nome@exemplo.com"/>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" onChange={alterarSenha} value={senha}
                                   placeholder="Sua senha"/>
                        </div>
                        <div className="mb-5 d-flex justify-content-end">
                            <button type="submit" className={"btn btn-dark " + css.botao}>Login</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 col-6 align-items-end justify-content-end d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiu3VZC6oEzWcxp4_x48Z0qug59r8DfHVEaw&s"/>
                </div>
            </div>
        </section>
    )
}