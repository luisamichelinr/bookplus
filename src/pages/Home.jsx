import Banner from "../components/Banner/Banner.jsx";
import Destaques from "../components/Destaques/Destaques.jsx";
import Botao from "../components/Botao/Botao.jsx";

export default function Home() {
    return (
        <>
            <Banner />

            <Destaques
                titulo={"Destaques da semana"}
            />

            <Botao
                nome={"Ver Catálogo Completo"}
                link={"/catalogo"}
            />
        </>
    )
}