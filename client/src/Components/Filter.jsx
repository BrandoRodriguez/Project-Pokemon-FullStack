import './Filter.css'
function Filter() {
    return (
        <div>
            <div className='ctn'>
                <div className='ctn_filter'>
                    <select className='filter' id='filter' name='name' >
                        <option>Order</option>
                        <option value='ASC name'>A-Z</option>
                        <option value='DESC name'>Z-A</option>
                        <option value='DESC strength'>Strength: High to Low</option>
                        <option value='ASC strength'>Strength: Low to High</option>
                        <option value='ASC cre'>Created</option>
                        <option value='DESC ncre'>Api</option>
                    </select>

                    <select className='filter' name='name'>
                        <option value='all'>Type</option>
                    </select>
                    
                </div>
                <div className='ctn_checkbox'>
                        <span>API</span>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        <span>BD</span>
                </div>
            </div>
           
        </div>
    );

}

export default Filter;