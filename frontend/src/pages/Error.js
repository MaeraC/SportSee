import image from '../assets/error.jpg'
import logo from '../assets/logo.png'
import '../styles/Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <section className="error">
            <Link to="/SportSee" className='logo-error'>
                <img src={logo} alt="logo" />
            </Link>
            <img src={image} alt="Erreur 404" className='error-img'/>
        </section>
        
    )
}

export default Error