import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import '../styles/VerticalNav.css'

function VerticalNav() {
    return(
        <nav className="vertical-nav">
            <div className="nav-img" >
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
            </div>
            
            <p className="copyright">Copyright, SportSee 2020</p>
        </nav>
    )
}

export default VerticalNav