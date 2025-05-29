import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi"



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
                </div>
            </div>
        </div>
    )
}
 
export default Home;