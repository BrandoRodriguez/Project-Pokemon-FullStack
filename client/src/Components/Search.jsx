import SearchCss from './Search.module.css';
import SearchImg from '../assets/images/search.svg';

function Search() {
    return (
        <div>
            <div className={SearchCss.search_form}>
                <label className={SearchCss.label}>
                    <span className={SearchCss.icon}>
                        <img src={SearchImg} alt="@brandorodriguez"/>
                    </span>
                    <input className={SearchCss.input} placeholder="Search Pokemon, Ability, Type, etc..."
                        type="search" name="input"/>
                </label>
            </div>
        </div>
    );
}
export default Search;