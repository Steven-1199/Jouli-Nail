import peopleIcon from "../img/user.png";
import plusIcon from "../img/plus.png";
import minusIcon from "../img/minus-sign.png";
import { useState, useContext } from "react";
import AppointmentContext from "../Context/AppointmentContext";
import { v4 as uuidv4 } from "uuid";
import Errormsg from "./Errormsg";

function AppointmentInput() {
  const { appointmentInfo, addAppointmentInfo } =
    useContext(AppointmentContext);
  const [numOfP, setNumOfP] = useState(0);
  const [service, setService] = useState("");
  const [notChooseService, setNotChooseService] = useState(false);
  const [notChooseNum, setNotChooseNum] = useState(false);

  const increaseNum = () => {
    setNumOfP((pre) => pre + 1);
  };
  const decreaseNum = () => {
    if (numOfP > 0) {
      setNumOfP((pre) => pre - 1);
    }
  };
  const handleChange = (e) => {
    setService(e.target.value);
  };
  const handleClick = (e) => {
    if (service !== "" && numOfP > 0) {
      addAppointmentInfo(uuidv4(service), service, numOfP);
    }
    if (service === "") {
      setNotChooseService(true);
      setTimeout(() => {
        setNotChooseService((pre) => !pre);
      }, 3000);
    }
    if (numOfP === 0) {
      setNotChooseNum(true);
      setTimeout(() => {
        setNotChooseNum((pre) => false);
      }, 3000);
    }

    setService("");
    setNumOfP(0);
  };
  return (
    <div className="mb-5">
      <select
        disabled=""
        onChange={handleChange}
        className="select select-bordered select-success w-[16.5rem] max-w-xs"
        value={service}
      >
        <option value="Choose Service">Choose Service</option>
        <option>Pedicure</option>
        <option>Manicure</option>
        <option>Gel Polish</option>
        <option>Dip Powder</option>
        <option>Fullset/Acrylics</option>
        <option>Other</option>
      </select>
      <div className="flex items-baseline">
        <div className="relative flex justify-center items-center rounded-xl border w-fit mt-2 mb-2">
          <div
            onClick={decreaseNum}
            className="btn btn-ghost hover:bg-transparent "
          >
            <img src={minusIcon} className="h-[1rem]"></img>
          </div>
          <div className="relative h-fit flex items-center">
            <input
              disabled="disabled"
              type="number"
              className="w-[4rem] h-[2.2rem]  text-right pr-2 text-2xl border "
              value={numOfP}
            ></input>
            <img
              src={peopleIcon}
              className="w-[1.5rem] absolute  top-[15%] bottom-0"
            ></img>
          </div>
          <div
            onClick={increaseNum}
            className="btn btn-ghost hover:bg-transparent"
          >
            <img src={plusIcon} className="h-[1rem]"></img>
          </div>
        </div>
        <div
          onClick={handleClick}
          className="btn btn-outline hover:border-[#3AAFA9]/50 hover:bg-[#3AAFA9]/50 hover:text-black mr-[1rem] ml-4"
        >
          <img src={plusIcon} className="w-[1rem] -translate-x-[0.5rem] "></img>
          <h5>Add</h5>
        </div>
      </div>

      {notChooseService ? <Errormsg msg="a service!" /> : ""}
      {notChooseNum ? <Errormsg msg="number of people!" /> : ""}
    </div>
  );
}

export default AppointmentInput;
