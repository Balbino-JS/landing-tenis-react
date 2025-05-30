import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import BannerBackground from "../assets/banner-sem-fundo.png";
import BannerImage from "../assets/sapato-social-sem-fundo-azul.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerimage-container">
          <img src={BannerBackground} alt="imagem do fundo da home" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Seu tênis favorito nos seus pés</h1>
          <p className="primary-text">
            Diversos modelos para sua escolha e momentos apropriados. Escolha já o seu!
          </p>
          <button className="secondary-button">
            Fale conosco <FiArrowRight />
          </button>

          <p className="primary-text">
            Venha conhecer nossa loja, um ambiente climatizado e aconchegante com várias opções para sua escolha.
          </p>
        </div>
        <div className="home-image-section">
          <div className="home-primary-image">
            <img src={BannerImage} alt="Tênis" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;