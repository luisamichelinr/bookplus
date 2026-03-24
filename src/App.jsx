import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Input/Input.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import CadastroLivro from "./pages/CadastroLivro.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import PaginaLivro from "./pages/PaginaLivro.jsx";
import {useState} from "react";
import PainelAdm from "./pages/PainelAdm.jsx";

export default function App() {
    const [busca, setBusca] = useState("");

    return (
        <>
            <BrowserRouter>
                <Header input={busca} setInput={setBusca} />

                <Routes>
                    <Route path="/" element={<Home input={busca} setInput={setBusca} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/livro/:id" element={<PaginaLivro />} />
                    <Route path="/cadastrolivro" element={<CadastroLivro />} />
                    <Route path="/paineladm" element={<PainelAdm />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}