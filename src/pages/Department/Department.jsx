import Navbar from '../../components/Navbar/Navbar';
import MyCalender from '../../components/MyCalendar/MyCalendar';
import Card from '../../components/Card/Card';
import data from '../../data/data';
import './Department.css'

function Department()
{
    let cards = data.map(function(item){
        return <Card Img={item.Img} course_name={item.course_name} key={item.key}  />
    })

    return (<div>
        <Navbar></Navbar>
        <div className='Mycontainer'>
           {cards}
        </div>
    </div>)
}
export default Department;