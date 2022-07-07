import { ApiUserScore } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import '../styles/UserScore.css'
import { RadialBarChart , RadialBar } from 'recharts';

function UserScore() {
    // State de départ
    const [ userScore , setUserScore ] = useState([])
    // Récupération de l'id de l'utilisateur
    const userId = useParams().id
    
    useEffect(() => {
      async function fetchUserScore() {
        const data = await ApiUserScore(userId)
        setUserScore(data)
        // Données du score atteint récupéré grâce à l'appel fetch
      }

      fetchUserScore()
    }, [userId]) 

    // userScore[1] : score en %
    // userScore[0] : barre du %
    return (
        <section className="user-score" >
            <div className='label'>
                <div className='percent'>{userScore[1]}</div>
                <div className='label-txt'>de votre objectif</div>
            </div>
            <p className='score'>Score</p>
        <RadialBarChart width={250} height={250} innerRadius="65%" outerRadius="90%" data={userScore[0]} startAngle={105} endAngle={600} barCategoryGap={0} >
            <RadialBar minAngle={35} label={false} clockWise={true} dataKey='value' background={false} />
        </RadialBarChart>
        </section>
        
    )
}

export default UserScore