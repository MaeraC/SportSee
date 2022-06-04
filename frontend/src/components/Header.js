import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
    return(
        <header>
            <div className="header">
                <img src={logo} alt="Logo de SportSee" className="logo" />
                <nav className="nav">
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header