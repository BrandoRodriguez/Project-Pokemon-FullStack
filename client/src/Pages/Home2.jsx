import Home2Css from './Home2.module.css'
import Header from './Header.jsx';
import Layout from './Layout.jsx';
import Pagination from '../Components/Pagination.jsx';

function Home2() {
    return (
        <div>
            <div className={Home2Css.section_card}>
                <div className={Home2Css.card}>
                    <Header/>
                    <Layout/>
                    <Pagination/>
                </div>
            </div>
        </div>

    );
}

export default Home2;