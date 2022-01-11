import { Link, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import calendar from "../img/calendar.png";
import "react-datepicker/dist/react-datepicker.css";
import AppointmentInputDisplay from "./AppointmentInputDisplay";
import AppointmentContext from "../Context/AppointmentContext";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";

function PickDate() {
  const navigate = useNavigate();
  const { appointmentInfo, addAppointmentDate, appointmentDate } =
    useContext(AppointmentContext);
  const [startDate, setStartDate] = useState(null);
  const [t, setT] = useState(new Date());

  useEffect(() => {
    const x = new Date();
    setT(x.setDate(x.getDate() + 3));
  }, []);

  const onClick = (e) => {};
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div>
        <div className=" relative w-fit h-fit">
          <DatePicker
            id="date"
            showTimeSelect
            minDate={t}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              addAppointmentDate(moment(date).format("YYYY-MM-DD hh:mm A"));
            }}
            placeholderText="SELECT-DATE-HERE"
            className=" w-[17rem] h-[3rem] border-2 border-[#3AAFA9] rounded-lg text-xl pl-2 cursor-pointer"
          />
          <img src={calendar} className="absolute top-0 right-2 my-[3%] w-8 " />
        </div>

        <div className="text-lg">
          {startDate === null
            ? "Please select date"
            : `Selected: ${moment(startDate).format("YYYY-MM-DD hh:mm A")}`}
        </div>
      </div>
    </div>
  );
}

export default PickDate;
