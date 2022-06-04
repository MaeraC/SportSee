import '../styles/UserHeader.css'
import { ApiUserName } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'

function UserHeader() {
    const [ userName , setUserName ] = useState(null)
    const userId = useParams().id

    useEffect(() => {
        const fetchUserName = async () => {
            const currentUserName = await ApiUserName(userId)
            setUserName(currentUserName)
        }

        fetchUserName()
    }, [userId])

    return (
        <div className="user-header">
            <h1>Bonjour <span>{userName}</span></h1>
            <h3>Félicitations ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    )
}

export default UserHeader