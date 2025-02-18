import { listData } from '../lib/dummydata.js';
import './listPage.scss';
import Filter from '../component/filter/filter.jsx';
import Card from '../component/card/card.jsx';
import Map from '../map/map.jsx';
function ListPage(){
    const data =listData;
    return(
        <div className='listPage'>
<div className="listContainer">
    <div className="wrapper">
<Filter/>
{data.map(item=>(
    <Card key={item.id}  item={item}/>
))}
    </div>
</div>
<div className="mapContainer">
    <Map items={data}/>
</div>
        </div>
    )
}

export default ListPage;