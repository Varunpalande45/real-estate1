import './singlePage.scss'
import Slider from '../../component/slider/Slider';
import Map  from "../../map/map";
import {singlePostData, userData} from "../../lib/dummydata";
function SinglePage(){
  return(
    <div className="singlePage">
      <div className="details"><div className="wrapper">
        <Slider images={singlePostData.images}/>
        <div className="info">
          <div className="top">
            <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src='/pin.png'/>
                <span>{singlePostData.address}</span>
              </div>
              <div className="price">${singlePostData.price}</div>
            </div>
            <div className="user">
              <img src={userData.img}/>
              <span>{userData.name}</span>
            </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
            
            </div>
            </div>
            </div>
      <div className="features"><div className="wrapper">
        <p className='title'> General</p>
        <div className="listVertical">
          <div className="feature">
            <img src='/utility.png'/>
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src='/pet.png'/>
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pets Allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src='/fee.png'/>
            <div className="featureText">
              <span>Property Fees</span>
              <p>Must have 3x the rent in total household income</p>
            </div>
          </div>
        </div>
        <p className='title'> Room Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src='/size.png'/>
            <span>80sqft</span>
          </div>
          <div className="size">
            <img src='/bed.png'/>
            <span>2 Beds</span>
          </div>
          <div className="size">
            <img src='/bath.png'/>
            <span>1 Bathroom</span>
          </div>
        </div>
        <p className='title'> Nearby Places</p>
        <div className="listHorizontal">
        <div className="feature">
            <img src='/school.png'/><div className="size">
            <span>School</span>
            <p>250m away</p>
          </div></div>
          <div className="feature">
            <img src='/bus.png'/><div className="size">
            <span>Bus Stop</span>
            <p>100m away</p>
          </div></div>
          <div className="feature">
            <img src='/restaurant.png'/><div className="size">
            <span>Restaurant</span>
            <p>200m away</p>
          </div></div>
        </div>
        <p className='title'> Location</p>
        <div className="mapContainer"><Map items={[singlePostData]}/></div>
        <div className="buttons">
          <button>
            <img src='/chat.png'/>
            Send a Message
          </button>
          <button>
            <img src='/save.png'/>
            Save the Place
          </button>
        </div>
      
        
        </div>
        </div>
    </div>
  )
}
export default SinglePage;