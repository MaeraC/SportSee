import UserHeader from './UserHeader'
import UserGraphics from './UserGraphics'
import '../styles/User.css'

function User() {
    return (
        <div className="user">
            <UserHeader />
            <UserGraphics />
        </div>
    )
}

export default User