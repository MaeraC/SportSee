async function ApiUserName(userId) {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    const data = await response.json()
    const userName = data.data.userInfos.firstName
    return userName
}

export { ApiUserName }