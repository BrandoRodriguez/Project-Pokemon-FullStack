import LayoutCss from '../Pages/Layout.module.css'
import Cards from '../Components/Card'

function Layouts() {
    return (
        <div>
            <ul className={LayoutCss.column_ul}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </ul>

        </div>

    );
}

export default Layouts;