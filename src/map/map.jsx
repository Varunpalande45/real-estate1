import { MapContainer,TileLayer} from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../component/pin/pin';
function Map({items}){
  return(
    <MapContainer center={[ 19.0760, 72.8777]} zoom={11.7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='<a href="https://www.openstreetmap.org">'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
{items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
  </MapContainer>
  )
}
export default Map;