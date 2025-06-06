import AboutBackgroundImage from "../assets/mão+tenis.png" 

const About = () => {
    return (
        <div className="about-section-text-container">
           

            <div className="about-section-image-contaoner">
                <img src={AboutBackgroundImage} alt="mao+tenis" />
            </div>
            <h2 className="primary-subheading">Sobre nós</h2>
            <h3 className="primary-heading"> É importante conhecer o molhor conforto para seus peis</h3>

            <p className="primary-text">Nascemos da paixão por moda e pelo desejo de transformar o modo como as pessoas se sentem ao calçar um sapato e tênis. Cada peça é desenvolvida com materiais nobres e atenção aos mínimos detalhes, passando por um rigoroso controle de qualidade antes de chegar até você.</p>
            <p className="primary-text">Nosso diferencial está na combinação entre tradição artesanal e inovação. Trabalhamos com tecidos legítimo, palmilhas anatômicas e tecnologia de amortecimento para garantir o máximo conforto durante todo o dia. Além disso, valorizamos a produção local e parcerias com fornecedores éticos, prezando por uma cadeia produtiva justa e sustentável.</p>
            <p className="primary-text">A marca Balbino-JS também representa estilo. Nossos modelos são pensados para acompanhar você em diferentes ocasiões: desde eventos formais e reuniões de negócios até momentos mais descontraídos, sem abrir mão da elegância.</p>
            <p className="primary-text">Acreditamos que calçado bom é aquele que te leva longe — com conforto, confiança e personalidade. Por isso, renovamos nossas coleções de forma sazonal, sempre atentos às tendências de moda e às preferências dos nossos clientes.</p>
            <p className="primary-text">Nosso atendimento é humanizado e atencioso. Buscamos oferecer uma experiência de compra diferenciada, seja no ambiente físico ou online, com suporte rápido e especializado para esclarecer dúvidas e ajudar na escolha do calçado ideal.</p>
            <p className="primary-text">Com orgulho, estamos construindo uma comunidade de clientes fiéis, que reconhecem o valor de um produto bem feito e de uma marca que respeita quem consome. Nossa missão é caminhar junto com você, passo a passo, deixando sua jornada mais leve, elegante e segura.</p>
        </div>
        
    )
}
export default About