import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import user12 from '../assets/icon-user-12.png'
import user18 from '../assets/icon-user-18.png'
import '../styles/Home.css'

function Home() {
    return(
        <main className="home">
            <div>
                <img src={logo} alt="Logo SportSee" className="logo" />
                <h4>Quel utilisateur êtes-vous ?</h4>
                <Link to='/dashboard/12' className="link" >
                    <img src={user12} alt="Utilisateur Karl Dovineau" />
                    <p>Karl Dovineau</p>
                </Link>
                <Link to='/dashboard/18' className="link" >
                    <img src={user18} alt="Utilisateur Cecilia Ratorez" />
                    <p>Cecilia Ratorez</p>
                </Link>
            </div>
        </main>
    )
}

export default Home