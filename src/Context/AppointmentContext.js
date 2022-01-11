import { createContext, useState, useEffect } from "react";

const AppointmentContext = createContext();

export const ContextProvider = ({ children }) => {
  const [appointmentInfo, setAppointmentInfo] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentPhone, setAppointmentPhone] = useState("");

  const addAppointmentInfo = (id, service, numOfP) => {
    setAppointmentInfo((pre) => [
      ...pre,
      { id: id, service: service, numOfP: numOfP },
    ]);
  };
  const emptyAppointmentInfo = () => {
    setAppointmentInfo([]);
  };

  const addAppointmentDate = (date) => {
    setAppointmentDate(date);
  };
  const emptyAppointmentDate = () => {
    setAppointmentDate("");
  };

  const addAppointmentPhone = (phone) => {
    setAppointmentPhone(phone);
  };
  const emptyAppointmentPhone = () => {
    setAppointmentPhone("");
  };

  const delectAppointmentInfo = (id) => {
    setAppointmentInfo(appointmentInfo.filter((item) => item.id !== id));
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointmentInfo,
        appointmentDate,
        appointmentPhone,
        addAppointmentInfo,
        delectAppointmentInfo,
        addAppointmentDate,
        addAppointmentPhone,
        emptyAppointmentInfo,
        emptyAppointmentDate,
        emptyAppointmentPhone,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContext;
