import { ApiUserActivity } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import iconPoids from '../assets/icon-poids.png'
import iconCal from '../assets/icon-cal.png'
import { BarChart, CartesianGrid,  XAxis, YAxis, Bar } from 'recharts'
import '../styles/UserActivity.css'

function UserActivity() {
    const [ userActivity , setUserActivity ] = useState([])
    const userId = useParams().id

    useEffect(() => {
        async function fetchUserActivity() {
            const data = await ApiUserActivity(userId)
            setUserActivity(data)
        }

        fetchUserActivity()
    }, [userId])   

    // BartChart : Récupère les données de l'activité du user
    // BarCategoryGap : écart entre les duos de barres / BarGap : écart entre les barres
    // CartesianGrid : insère les lignes en pointillés
    // Xaxis : data day sur la ligne horizontale
    // Yaxis : data kilogram sur la ligne verticale 
    // Bar : barres data kilogram & calories

    return (
        <div className="graphic-activity">
            <div className="activity-legende">
                <h3>Activité quotidienne</h3>
                <div className="legende">
                    <div className="poids">
                        <img src={iconPoids} alt="" />
                        <p>Poids (kg)</p>
                    </div>
                    <div className="cal">
                        <img src={iconCal} alt="" />
                        <p>Calories brûlées (kCal)</p>
                    </div>
                </div>
            </div>

            <BarChart width={770} height={245} data={userActivity} barCategoryGap={35} barGap={8} margin={{top: 50 , left: 20 , bottom: 20}}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis tick={{ transform: 'translate(0, 16)', stroke: "#9B9EAC", fontSize: "14px" }} scale="auto"  padding={{ left: -25, right: -25 }} tickLine={false} dataKey="name" axisLine={false} interval={0} />
                <YAxis yAxisId={"kil"} domain={["dataMin - 2", "dataMax + 1"]} tick={{ transform: 'translate(0, 0)', fontSize: "14px" }} tickMargin={15} tickLine={false} orientation="right" dataKey="kilogram" axisLine={false} />
                <YAxis yAxisId={"cal"}  hide={true}  domain={["dataMin - 100", "dataMax"]}  />
                <Bar yAxisId={"kil"}  dataKey="kilogram" fill="#000" radius={[50, 50, 0, 0]}  />
                <Bar yAxisId={"cal"} dataKey="calories" fill="#e60000" radius={[50, 50, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default UserActivity