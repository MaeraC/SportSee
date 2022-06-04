import Header from '../components/Header'
import VerticalNav from '../components/VerticalNav'
import User from '../components/User'
import '../styles/Dashboard.css'

function Dashboard() {
    return (
        <div className="main">
            <Header />
            <section>
                <VerticalNav />
                <User />
            </section>
        </div>
    )
}

export default Dashboard