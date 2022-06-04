import UserActivity from './UserActivity'
import '../styles/UserGraphics.css'

function UserGraphics() {
    return (
        <div className="user-graphics">
            <div className="user-graphics-top">
                <UserActivity />
            </div>
        </div>
    )
}

export default UserGraphics