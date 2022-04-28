import HeaderCss from './Header.module.css';
import Nav from "../Components/Nav";
import Search from '../Components/Search.jsx';
import Filter from '../Components/Filter.jsx';
import Button from '../Components/Button.jsx';

function Header() {
    return (
        <div>
            <div className={HeaderCss.header}>
                <Nav/>
                <div className={HeaderCss.ctn_filter}>
                    <Search/>
                    <Filter/>
                    <Button/>
                </div>
                
            </div>
        </div>
    );
}

export default Header;