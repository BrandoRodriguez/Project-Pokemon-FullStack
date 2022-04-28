import './Pagination.css'

function Pagination() {
    return (
        <div>
            <div className='pagination'>
                <ul>
                    <li>
                        <a href="/" class="prev">
                            Previous
                        </a>
                        <a href="/">01</a>
                        <a href="/" class="active">02</a>
                        <a href="/">03</a>
                        <a href="/">04</a>
                        <a href="/">06</a>
                        <a href="/">07</a>
                        <a href="/">07</a>
                        <a href="/" class="next">Next
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Pagination;