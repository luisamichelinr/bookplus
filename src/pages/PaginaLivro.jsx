import css from "../components/Input/Input.module.css";
import Input from "../components/Input/Input.jsx";

export default function PaginaLivro() {
    return (
        <section className={"container-fluid " + css.tela}>
            <div className="row align-items-center">
                <div className="col-md-4 col-6 align-items-center justify-content-center d-flex">
                    <img src="https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg"/>
                </div>
                <div className="col-md-8 col-6">
                    <h2>Jogos Vorazes</h2>
                    <div className="justify-content-around d-flex">
                        <p><span>Autor: </span>Suzane Collins</p>
                        <p><span>Categoria: </span>Distopia</p>
                        <p><span>Faixa etária: </span> A partir de 12 anos</p>
                    </div>
                    <p>Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto. Onze tiros no primeiro dia. Treze jovens restaram, entre eles, Katniss. Para quem os tiros de canhão serão no dia seguinte?...

                        Após o fim da América do Norte, uma nova nação chamada Panem surge. Formada por doze distritos, é comandada com mão de ferro pela Capital. Uma das formas com que demonstra seu poder sobre o resto do carente país é com Jogos Vorazes, uma competição anual transmitida ao vivo pela televisão, em que um garoto e uma garota de doze a dezoito anos de cada distrito são selecionados e obrigados a lutar até a morte!

                        Para evitar que sua irmã seja a mais nova vítima do programa, Katniss se oferece para participar em seu lugar. Vinda do empobrecido Distrito 12, ela sabe como sobreviver em um ambiente hostil. Peeta, um garoto que ajudou sua família no passado, também foi selecionado. Caso vença, terá fama e fortuna. Se perder, morre. Mas para ganhar a competição, será preciso muito mais do que habilidade. Até onde Katniss estará disposta a ir para ser vitoriosa nos Jogos Vorazes?</p>
                </div>
            </div>
        </section>
    )
}