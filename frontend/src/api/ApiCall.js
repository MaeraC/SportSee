async function ApiUserName(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    const data = await response.json()
    const userName = data.data.userInfos.firstName
    return userName
}

async function ApiUserActivity(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json()
    const userActivity = data.data.sessions
    userActivity.map((session, index) => (
        session.name = index + 1
    )) 
    return userActivity
}

async function ApiUserCount(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    const data = await response.json()
    const userCount = data.data.keyData
    const userCalories = userCount.calorieCount
    const userProteins = userCount.proteinCount
    const userGlucides = userCount.carbohydrateCount
    const userLipids = userCount.lipidCount
    return [ userCalories , userProteins , userGlucides , userLipids ]
}

async function ApiUserSessions(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const data = await response.json()
    const userSessions = data.data.sessions
    return userSessions
}

async function ApiUserPerformance(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = await response.json()
    const userPerformance = Object.values(data.data.kind)

    userPerformance.map((kindPerf, index) => (
        data.data.data[index].kindPerf = kindPerf
    ))
    
    return data.data.data   
}

async function ApiUserScore(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
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
    let PercentValue = dataValues.map(x => x.value)
    let PercentString = (PercentValue[1] * 100) + '%'

    return [userScore, PercentString]
}

export { ApiUserName , ApiUserActivity , ApiUserCount , ApiUserSessions , ApiUserPerformance , ApiUserScore }