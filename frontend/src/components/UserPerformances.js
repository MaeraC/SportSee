import { ApiUserPerformance } from '../api/ApiCall'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import '../styles/UserPerformances.css'
import { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, PolarGrid } from "recharts";

function UserPerformance() {
    const [ userPerformance , setUserPerformance ] = useState()
    const userId = useParams().id
  
    useEffect(() => {
      async function fetchUserPerformance() {
        const data = await ApiUserPerformance(userId)
        setUserPerformance(data)
      }
  
      fetchUserPerformance()

    }, [userId])   

    return (
      <div className="user-performance">
        <RadarChart outerRadius={90} width={230} height={230} data={userPerformance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kindPerf" tick={{fill:"#ffffff", fontSize:12}} axisLine={true} tickLine={true} />
          <PolarRadiusAxis tickCount={5} domain={[0, 150]} axisLine={false} tick={false} />
          <Radar dataKey="value" stroke="rgba(230, 0, 0, .7)" fill="#E60000" fillOpacity={0.6} />
        </RadarChart>
      </div>
    )  
}

export default UserPerformance