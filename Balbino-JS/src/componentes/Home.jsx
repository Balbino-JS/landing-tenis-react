import Navbar from "./Navbar"
import { FiArrowRight } from "react-icons/fi"
import BannerImage from "../assets/tinis-azul.png"



const Home = () => {
    return (
        <div className="home-container">
            <Navbar />

            <div className="home-banner-container">
                <div className="home-bannerimage-container">
                  
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">Seu tenis favorito no seus peis</h1>
                    <p className="primary-text">
                        Diversos modelos para sua escolha e momentos apropriados. Escolha já o seu!
                    </p>
                    <button className="sencondary-button">Fale conosco <FiArrowRight /></button>

                    <p className="primary-text">
                        Venha conhecer nossa loja um ambiente climatizado e aconchegante com várias opeçoes para sua escolha.
                    </p>
                </div>
                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img src={BannerImage} alt="Tenis" />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Home;