import nextIcon from "../../img/right.png";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";

function BookSection() {
  return (
    /*<div className="relative top-[60vh] h-[30vh] bg-[#DEF2F1] pt-2 min-w-[360px]">
      <h2 className="text-[30px] font-bold ml-6">BOOK</h2>
      <div className="w-full h-[30vh] flex justify-center items-center absolute top-0">
        <div className="shadow-lg bg-white h-[40%] w-full rounded-xl flex justify-center items-center">
          <Link to="/signin" className="btn btn-accent h-[1rem] btn-active  ">
            <h4 className="mr-2">Make Appointment</h4>
            <img src={nextIcon} className="w-5"></img>
          </Link>
        </div>
      </div>
  </div>*/
    <div className="relative h-[50vh]  w-[100vw] left-0 right-0 overflow-x-hidden max-w-full text-[#17252A] flex items-center">
      <div className="card shadow-2xl h-[90%] w-[100vw] bg-[#DEF2F1]">
        <div className="card-body ">
          <h2 className="card-title text-[30px] font-bold flex justify-center">
            BOOKING
          </h2>
          <div className="font-thin text-sm">
            <p>
              <FaStarOfLife className="inline mr-2 w-2" />
              All online appointments has to be made 3 days in advance.
            </p>
            <p>
              <FaStarOfLife className="inline mr-2 w-2" />
              All online appointments will need an approval from us by phone
              call.
            </p>
            <p>
              <FaStarOfLife className="inline mr-2 w-2" />
              If you do not hear from us, please call to confirm one day before
              your appointment schdual.
            </p>
          </div>
          <div className="justify-center card-actions ">
            <Link
              to="/signin"
              className="btn btn-accent h-[1rem] btn-active mt-[10%] "
            >
              <h4 className="mr-2">Make Appointment</h4>
              <img src={nextIcon} className="w-5"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSection;
