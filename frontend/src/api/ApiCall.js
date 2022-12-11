// Appels fetch pour récupérer les données de l'API 

// Récupération du nom de l'utilisateur
async function ApiUserName(userId) {
    const response = await fetch(`http://localhost:3001/user/${userId}`)
    const data = await response.json()
    const userName = data.data.userInfos.firstName
    return userName
}

// Récupération de l'activité quotidienne de l'utilisateur (poids/cal)
async function ApiUserActivity(userId) {
    const response = await fetch(`http://localhost:3001/user/${userId}/activity`)
    const data = await response.json()
    const userActivity = data.data.sessions
    userActivity.map((session, index) => (
        session.name = index + 1
    )) 
    return userActivity
}

// Récupération des données des infos clés du l'utilisateur
async function ApiUserCount(userId) {
    const response = await fetch(`http://localhost:3001/user/${userId}`)
    const data = await response.json()
    const userCount = data.data.keyData
    const userCalories = userCount.calorieCount
    const userProteins = userCount.proteinCount
    const userGlucides = userCount.carbohydrateCount
    const userLipids = userCount.lipidCount
    return [ userCalories , userProteins , userGlucides , userLipids ]
}

// Récupération du temps de session quotidienne de l'utilisateur 
async function ApiUserSessions(userId) {
    const response = await fetch(`http://localhost:3001/user/${userId}/average-sessions`)
    const data = await response.json()
    const userSessions = data.data.sessions
    return userSessions
}

// Récupération des différents types d'activités de l'utilisateur
async function ApiUserPerformance(userId) {
    const response = await fetch(`http://localhost:3001/user/${userId}/performance`)
    const data = await response.json()
    const userPerformance = Object.values(data.data.kind)

    userPerformance.map((kindPerf, index) => (
        data.data.data[index].kindPerf = kindPerf
    ))
    
    return data.data.data   
}

// Récupération du score de l'utilisateur atteint par rapport l'objectif donnée
async function ApiUserScore(userId) {
    const response = await fetch(`http://localhost:3001/user/${userId}`)
    const data = await response.json()
    const userScore = await [
        {
            "value": 1,
            "fill": "transparent"
        },
          {
            "value": data.data.score ? data.data.score : data.data.todayScore,
            "fill": "#FF0000"
        }
    ]

    let dataValues = Object.values(userScore)
    // score récupéré
    let PercentValue = dataValues.map(x => x.value)
    // score converti en %
    let PercentString = (PercentValue[1] * 100) + '%'

    return [userScore, PercentString]
}

export { ApiUserName , ApiUserActivity , ApiUserCount , ApiUserSessions , ApiUserPerformance , ApiUserScore }