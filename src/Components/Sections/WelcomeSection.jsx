import nailIcon from "../../img/manicure.png";
import nextIcon from "../../img/right.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
function WelcomeSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#3AAFA9]  flex justify-center  items-center font-bold fixed z-[0] w-[100vw] h-[60vh]  top-0 bottom-0 left-0 right-0 max-w-full overflow-x-hidden">
      <div className="w-[80%]  flex flex-col items-center">
        <div className="leading-7">
          <div className="flex items-baseline ">
            <h1 className="text-[#DEF2F1] text-[35px] md:text-[50px] ml-[-3rem] mr-[1rem]">
              WELCOM
            </h1>
            <img src={nailIcon} className="w-16 "></img>
          </div>
          <div className=" text-[35px] ">
            <h1 className="text-[#17252A]">JOUILI NAILS</h1>
          </div>
        </div>

        <button
          onClick={(e) => {
            navigate("/signin");
          }}
          className="btn btn-outline h-[1rem] mt-6 "
        >
          <h4 className="mr-2">Make Appointment</h4>
          <img src={nextIcon} className="w-5"></img>
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;
