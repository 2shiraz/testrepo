
function MeetupItems(props){
    return <li className="item">
        <div>
            <img src={props.imgSrc} alt="" className="image" />
        </div>
        <div>
            <h3>{props.title}</h3>
            <address>{props.addrs}</address>
            <p>{props.dscp}</p>
        </div>
        <div>
            <button className='btn'>Fav</button>
        </div>
    </li>
}
export default MeetupItems;