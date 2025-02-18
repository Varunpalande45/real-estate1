import'./list.scss';
import Card from '../../component/card/card';
import {listData} from '../../lib/dummydata';
function List(){
    return(
        <div className="list">
            {listData.map(item=>(
                <Card key ={item.id} item={item}/>
            ))}
        </div>
    )
}
export default List;