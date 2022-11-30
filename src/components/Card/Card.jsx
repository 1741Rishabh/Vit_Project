
import './Card.css'
function Card(props) {
    return (
        <div className="my-card" >
            <img src= {props.Img} alt="" />
            <div className='my-cardTitle'>
                <h1>{props.course_name}</h1>
                <p>Master of Business Administration</p>
            </div>


        </div>)
}

export default Card;