import DetailsCss from './Details.module.css';
import logo from '../assets/images/logo.svg'
import pokemon from '../assets/images/charizard.png'
import flecha from '../assets/images/flecha.svg'

const bgpokemon = {
    backgroundImage:
      `url(${pokemon})`,
  };

function Details() {

    const skills = [
        { name: 'HP', value: '45' },
        { name: 'Attack', value: '45' },
        { name: 'Defense', value: '45' },
        { name: 'Attack Speed', value: '45' },
        { name: 'Defense Speed', value: '45' },
        { name: 'Speed', value: '45' },
        { name: 'Total', value: '45' }
    ]

    return (
        <div>
            <div className={DetailsCss.section_card}>
                <div className={DetailsCss.hero_image_wrapper}>
                    <span style={bgpokemon}  className={DetailsCss.pokemon}>
                    </span>
                    <div className={DetailsCss.bg_title}>
                        <h2 className={DetailsCss.title}>
                        Charizard
                        </h2>
                    </div>
                </div>
                <div className={DetailsCss.card}>
                    <div>
                        <div className={DetailsCss.nav}>
                            <a href="/" className={DetailsCss.ctn_logo}>
                                <img className={DetailsCss.nav_logo} src={logo} alt="@brandorodriguez" />
                            </a>
                            <h2 className={DetailsCss.h2}>#001</h2>                          
                        </div>
                    </div>

                   
                    <div className={DetailsCss.content_wrapper}>
                        <a href="/">
                            <img src={flecha} alt="" />
                        </a>
                        <h3 className={DetailsCss.h3}>Charizard</h3>
                        <div className={DetailsCss.type}>
                            <span className={DetailsCss.type_background}>grass</span>
                            <span className={DetailsCss.type_background}>poison</span>
                        </div>
                        <p className={DetailsCss.p}>
                            All the Pokémon data you'll ever need in one place,
                            easily accessible through a modern PokeApp.
                        </p>

                        <div className={DetailsCss.ctn_details}>
                            <div>
                                {skills.map((skill, index) => {
                                    return (
                                        <h4 className={DetailsCss.h4} key={index}>{skill.name}</h4>
                                    )
                                })}
                            </div>
                            <div>
                                {skills.map((skill, index) => {
                                    return (
                                        <h4 className={DetailsCss.h4} key={index}>{skill.value}</h4>
                                    )
                                })}
                            </div>

                            <div className={DetailsCss.all_bars}>
                                {skills.map((skill, index) => {
                                    return (
                                        <div className={DetailsCss.barra_container}>
                                            <div className={DetailsCss.barra_background}></div>
                                            <div className={DetailsCss.barra}></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Details;
