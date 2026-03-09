import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/Input/Input.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import PaginaLivro from "./pages/PaginaLivro.jsx";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/livro/:id" element={<PaginaLivro />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    )
}