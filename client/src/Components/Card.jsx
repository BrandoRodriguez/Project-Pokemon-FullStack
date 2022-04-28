import CardCss from './Card.module.css';
import Pokemon from '../assets/images/6.svg'

function Card() {
    return (
        <div>
                <div className={`${CardCss.card} ${CardCss.background_type}`}>
                    <h2 className={CardCss.h2}>#001</h2>
                    <div className={CardCss.description}>
                        <h3 className={CardCss.h3}>Pokemon</h3>
                        <div className={CardCss.type}>
                            <span className={CardCss.type_background}>grass</span>
                            <span className={CardCss.type_background}>poison</span>
                        </div>
                    </div>

                    <img className={CardCss.img}
                        src={Pokemon}
                        alt="bulbasaur" width="90" height="90"
                    />
                </div>  
        </div>
    );
}

export default Card;
