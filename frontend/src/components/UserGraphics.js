import UserActivity from './UserActivity'
import UserCount from './UserCount'
import '../styles/UserGraphics.css'

function UserGraphics() {
    return (
        <div className="user-graphics">
            <div className="user-graphics-top">
                <UserActivity />
                <UserCount />
            </div>
        </div>
    )
}

export default UserGraphics