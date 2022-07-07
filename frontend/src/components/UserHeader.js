import '../styles/UserHeader.css'
import { ApiUserName } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'

function UserHeader() {
    // State de départ : userName = null
    const [ userName , setUserName ] = useState(null)
    // Récupération de l'id du user
    const userId = useParams().id

    useEffect(() => {
        const fetchUserName = async () => {
            const currentUserName = await ApiUserName(userId)
            setUserName(currentUserName)
            // UserName récupéré grâce à l'appel fetch
        }

        fetchUserName()
    }, [userId])

    // Intégration du username récupéré
    return (
        <div className="user-header">
            <h1>Bonjour <span>{userName}</span></h1>
            <h3>Félicitations ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    )
}

export default UserHeader