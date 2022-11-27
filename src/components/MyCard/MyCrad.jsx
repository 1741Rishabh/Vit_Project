
import BBA from '../../assets/img/BBA.jpg';

import "./MyCard.css";


const MyCard = (props) => {
  return (
    <>
      <div className="container align-items-center">
        <div className="row">
          <div className="col-lg-3 col-sm d-flex justify-content-center">
            <div className="program">
              <img src={BBA} alt="MCA" />
              <div className="Title">
                <h4>MCA</h4>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default MyCard
