import { Link, useNavigate } from "react-router-dom";
import plusIcon from "../img/plus.png";
import AppointmentInput from "../Components/appointmentInput";
import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AppointmentInputDisplay from "../Components/AppointmentInputDisplay";
import AppointmentContext from "../Context/AppointmentContext";
import { getAuth } from "firebase/auth";
import {
  updateDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import PickDate from "../Components/PickDate";
import moment, { invalid } from "moment";
import PhoneNumber from "../Components/PhoneNumber";

function AppointmentPage() {
  const navigate = useNavigate();
  const {
    appointmentInfo,
    addAppointmentDate,
    appointmentDate,
    appointmentPhone,
    emptyAppointmentInfo,
    emptyAppointmentDate,
    emptyAppointmentPhone,
  } = useContext(AppointmentContext);
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [date, setDate] = useState(null);
  const handleBack = (e) => {
    auth.signOut();
    navigate("/signin");
  };
  const saveToFirebase = async () => {
    const formDataCopy = {
      appointmentInfo,
      appointmentDate,
      appointmentPhone,
      time: serverTimestamp(),
    };
    const docRef = await addDoc(collection(db, "listings"), formDataCopy);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (appointmentInfo.length === 0) {
      toast.error("Please choose a service");
    } else if (appointmentDate === "") {
      toast.error("Please choose a date");
    } else if (appointmentPhone === "") {
      toast.error("Please type your phone number");
    } else {
      saveToFirebase();
      emptyAppointmentInfo();
      emptyAppointmentDate();
      emptyAppointmentPhone();
      navigate("/message");
    }
  };

  return (
    <div className="min-w-[360px]  min-h-screen bg-base-200">
      <div className="relative top-[6rem] pl-5 font-bold text-2xl">
        <h1>Welcome</h1>
      </div>
      <div className=" w-full flex flex-col  items-center relative top-[10rem]">
        <div>
          <AppointmentInput key="asdf" />
        </div>
        <div>
          {appointmentInfo.map((item) => (
            <AppointmentInputDisplay
              key={item.id}
              id={item.id}
              service={item.service}
              numOfP={item.numOfP}
            />
          ))}
        </div>

        <PickDate />
        <PhoneNumber />

        <div className="w-[17rem] mt-[3rem] flex">
          <div onClick={handleBack} className="btn w-[6rem] mr-6">
            GO BACK
          </div>
          <div onClick={onClick} className="btn btn-accent w-[9rem] ">
            CONTINUE
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentPage;
