import HomeCss from './Home.module.css';
import logo from '../assets/images/logo.svg'
import github from '../assets/images/github.svg'

function Home() {
    return (
        <div>
            <div className={HomeCss.section_card}>
                <div className={HomeCss.hero_image_wrapper}>
                    <span className={HomeCss.pokemon}>
                    </span>
                </div>
                <div className={HomeCss.card}>
                    <div>
                        <div className={HomeCss.nav}>
                            <a href="/" className={HomeCss.ctn_logo}>
                                <img className={HomeCss.nav_logo} src={logo} alt="@brandorodriguez" />
                            </a>
                            <a className={HomeCss.btn1} href="/">
                                <img src={github} alt="@brandorodriguez" />
                            </a>
                        </div>
                    </div>

                    <div className={HomeCss.bg_title}>
                        <h2 className={HomeCss.title}>
                            Pikachu
                        </h2>
                    </div>
                    <div className={HomeCss.content_wrapper}>
                        <span className={HomeCss.badge}>
                            <span>
                                new project
                            </span>
                            Pokemon App
                        </span>
                        <h3 className={HomeCss.h3}>Les´t Go, Pokemons.</h3>
                        <p className={HomeCss.p}>
                            All the Pokémon data you'll ever need in one place,
                            easily accessible through a modern PokeApp.
                        </p>
                        <a className={HomeCss.btn} href="/">Explore now.
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
