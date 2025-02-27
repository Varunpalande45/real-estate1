import'./filter.scss';
function Filter(){
    return(
        <div className='filter'>
            <h1>Search Results for <b>MUMBAI</b></h1>
            <div className="top">
                <div className="item">
                <label htmlFor='city'>Location  </label>
                <input type='text' id='city' name='city' placeholder='City Location'/>
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                <label htmlFor='type'>Type  </label>
                <select name="type" id="type">
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                    
                </select>
                </div>
                <div className="item">
                <label htmlFor='property'>Property  </label>
                <select name="property" id="property">
                <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="LanD">Rent</option>
                </select>
                </div>
                <div className="item">
                <label htmlFor='minprice'>MinPrice  </label>
                <input type='number' id='minprice' name='minprice' placeholder='any'/>
                </div>
                <div className="item">
                <label htmlFor='maxprice'>Maxprice  </label>
                <input type='number' id='maxprice' name='maxprice' placeholder='any'/>
                </div>
                <div className="item">
                <label htmlFor='bedroom'>Bedroom  </label>
                <input type='text' id='bedroom' name='bedroom' placeholder='any'/>
                </div>
                <button>
                    <img src='/search.png'/>
                </button>
            </div>
        </div>
    )
}
export default Filter;