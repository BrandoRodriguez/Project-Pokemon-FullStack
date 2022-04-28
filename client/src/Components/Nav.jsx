import NavCss from './Nav.module.css'
import Logo from '../assets/images/logo.svg'

function Nav() {
    return (
        <div>
            <div className={NavCss.ctn_nav}>
                <img className={NavCss.logo} src={Logo} alt="@brandorodriguez"/>
            </div>
        </div>

    );
}

export default Nav;