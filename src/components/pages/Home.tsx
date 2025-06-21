import pic16 from "../../assets/pic16.jpg"
import cardspic from "../../assets/cardspic.jpg"


const Home = () => {
  return (
  <div className="card" style={{ width: '1371px',height:"280px",marginLeft:"-88px" }}>
  <img src={pic16} className="card-img-top" style={{height:"400px",width: '1359px'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Andaman & Nicobar islands</h5>
    <p className="card-text">The Andaman and Nicobar Islands is a union territory of India comprising 572 islands, of which only 38 are inhabited. The islands are grouped into two main clusters: the northern Andaman Islands and the southern Nicobar Islands, separated by a 150 km (93 mi) wide channel. The capital and largest city of the territory, Port Blair (officially Sri Vijaya Puram), is located approximately 1,190 km (740 mi) from Chennai and 1,255 km (780 mi) from Kolkata in mainland India. The islands are situated between the Bay of Bengal to the west and the Andaman Sea to the east. The northernmost point is 901 km (560 mi) from the mouth of the Hooghly River.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  

  <div className="card" style={{ width: '1371px',height:"280px",marginLeft:"-50px",marginTop:"55px" }}>
  <img src={cardspic}className="card-img-top"style={{height:"400px"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Japan, an island nation in East Asia, is a land of captivating contrasts, seamlessly blending its rich history and vibrant culture with cutting-edge technology and modern innovation. From ancient temples and serene gardens to bustling cityscapes and technological marvels, Japan offers a unique and multifaceted experience.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div></div>
  
</div>

</div>
    
  )
}

export default Home