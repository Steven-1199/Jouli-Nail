import { useContext } from "react";
import AppointmentContext from "../Context/AppointmentContext";

function PhoneNumber() {
  const { appointmentPhone, addAppointmentPhone } =
    useContext(AppointmentContext);
  return (
    <div className="form-control mt-6">
      <input
        onChange={(e) => {
          addAppointmentPhone(e.target.value);
        }}
        type="number"
        placeholder="phone number"
        className="input input-bordered w-[17rem] h-[3rem] border-2 border-[#3AAFA9]"
      />
      <label className="label">
        <span className="label-text">Please provide your Phone Number</span>
      </label>
    </div>
  );
}

export default PhoneNumber;
