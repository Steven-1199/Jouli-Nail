import closeIcon from "../img/close.png";
import editIcon from "../img/edit.png";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AppointmentContext from "../Context/AppointmentContext";

function AppointmentInputDisplay({ id, service, numOfP }) {
  const { delectAppointmentInfo } = useContext(AppointmentContext);
  const location = useLocation();
  const handleClose = (e) => {
    delectAppointmentInfo(id);
  };

  return (
    <div className="rounded-lg shadow-lg w-[17rem] flex flex-row justify-between items-end text-lg font-thin h-[3rem] px-2 relative mb-3">
      <div className="absolute flex top-1 right-1">
        <div onClick={handleClose} className="hover:cursor-pointer">
          <img src={closeIcon} className="w-[1rem]" />
        </div>
      </div>

      <div>
        <span>{service}</span>
      </div>
      <div>
        <span>{numOfP} People</span>
      </div>
    </div>
  );
}

export default AppointmentInputDisplay;
