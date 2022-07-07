import { ApiUserSessions } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import '../styles/UserSessions.css'
import { Line, LineChart, XAxis, YAxis, Tooltip } from "recharts";

function UserSessions() {
  const [ userSessions , setUserSessions ] = useState([])
  const userId = useParams().id
  const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    async function fetchUserSessions() {
      const data = await ApiUserSessions(userId)
      setUserSessions(data)
    }

    fetchUserSessions()
  }, [userId])   

  // tableau d'objets avec le type et la valeur 
  const Datas = userSessions.map((item) => {
    return {
      weekDays : weekDays[item.day - 1],
      sessionLength : item.sessionLength,
    }
  })

  // Insère dans l'info-bulle la durée de session de chaque jour en minutes
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }

  // LineChart data: récupère les données de la durée des sessions
  // Xaxis : data weekDays sur la ligne horizontale
  // Yaxis : data sur la ligne verticale (hidden)
  // Tooltip : info-bulle au survol
  return (
    <div className="user-sessions">
      <h2>Durée moyenne des sessions</h2>
      <LineChart width={250} height={263} data={Datas} margin={{ top: 0, right: 0, left: 0, bottom: 10 }} className="lineChart"> 
        <XAxis dataKey="weekDays" stroke="rgba(255, 255, 255, 0.5)" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} padding={{ left: 11, right: 9 }} />
        <YAxis hide={true} type="number" domain={["dataMin - 10", "dataMax + 40"]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line type="natural" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} r={8} height={40} margin={{ top: 0, right: 0, left: 0, bottom: 40 }} />
      </LineChart>
    </div>
  )
}

export default UserSessions