import Banner from "../components/Banner/Banner.jsx";
import Destaques from "../components/Destaques/Destaques.jsx";
import Botao from "../components/Botao/Botao.jsx";

export default function Home({input, setInput}) {
    return (
        <>
            <Banner />

            <Destaques
                titulo={"Destaques da semana"}
                input={input} setInput={setInput}
            />

            <Botao
                nome={"Ver Catálogo Completo"}
                link={"/catalogo"}
            />
        </>
    )
}