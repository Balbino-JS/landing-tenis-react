import React from "react"
import Logo from "../assets/Logo.png"
import HomeIcon from "@mui/icons-material/Home"
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(flase)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        }
    ]
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="logo" />
            </div>

            <div className ="navbar-links-contaier">
                <a href="">Home</a>
                <a href="">Sobre nos</a>
                <a href="">Nosso Trabalho</a>
                <a href="">Avaliações</a>
                <a href="">Contato</a>

                <button className="primary-button">Fale conosco</button>
            </div>
            <div className="nav-bar-menu-contaoner">

            </div>
        </nav>
    )
}

export default Navbar; 