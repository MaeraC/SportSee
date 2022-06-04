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

export { ApiUserName , ApiUserActivity }