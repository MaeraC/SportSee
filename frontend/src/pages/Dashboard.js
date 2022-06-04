import Header from '../components/Header'
import VerticalNav from '../components/VerticalNav'
import '../styles/Dashboard.css'

function Dashboard() {
    return (
        <div className="main">
            <Header />
            <section>
                <VerticalNav />
            </section>
        </div>
    )
}

export default Dashboard