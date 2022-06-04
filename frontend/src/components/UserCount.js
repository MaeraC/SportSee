import { ApiUserCount } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import iconCalories from '../assets/icon-calories.png'
import iconProteins from '../assets/protein-icon.png'
import iconGlucides from '../assets/carbs-icon.png'
import iconLipids from '../assets/fat-icon.png'
import '../styles/UserCount.css'

function UserCount() {
    const [ userCalories , setUserCalories ] = useState(true)
    const userId = useParams().id

    useEffect(() => {
        const fetchUserCount = async () => {
            const currentUserCalories = await ApiUserCount(userId)
            setUserCalories(currentUserCalories)
        }

        fetchUserCount()
    }, [userId])

    return(
        <aside>
            <div className="count">
                <img src={iconCalories} alt="Icône Calories" />
                <div className="description">
                    <p className="countInfo">{userCalories[0]}<span>kCal</span></p>
                    <p className="countName">Calories</p>  
                </div>
            </div>
            <div className="count">
                <img src={iconProteins} alt="Icône Protéines" />
                <div className="description">
                    <p className="countInfo">{userCalories[1]}<span>g</span></p>
                    <p className="countName">Protéines</p>  
                </div>
            </div>
            <div className="count">
                <img src={iconGlucides} alt="Icône Glucides" />
                <div className="description">
                    <p className="countInfo">{userCalories[2]}<span>g</span></p>
                    <p className="countName">Glucides</p>
                </div>
            </div>
            <div className="count">
                <img src={iconLipids} alt="Icône Lipides" />
                <div className="description">
                    <p className="countInfo">{userCalories[3]}<span>g</span></p>
                    <p className="countName">Lipides</p>
                </div>
            </div>
        </aside>
    )
}

export default UserCount