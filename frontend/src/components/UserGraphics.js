import UserActivity from './UserActivity'
import UserCount from './UserCount'
import UserSessions from './UserSessions'
import UserPerformance from './UserPerformances'
import UserScore from './UserScore'
import '../styles/UserGraphics.css'

function UserGraphics() {
    return (
        <div className="user-graphics">
            <div className="user-graphics-top">
                <UserActivity />
                <div className="user-graphics-bottom">
                    <UserSessions />
                    <UserPerformance />
                    <UserScore />
                </div>
            </div>
            <UserCount />
        </div>
    )
}

export default UserGraphics