import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [drop, setDrop] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setDrop((prev) => !prev);
  };

  return (
    <div className="fixed z-10  w-[100vw] top-0 bottom-0 left-0 right-0 max-w-full h-[3rem]">
      <div className=" navbar mb-2 shadowLg bg-[#3AAFA9]/90 text-neutral-content text-xl shadow-lg text-[#DEF2F1]">
        <div
          onClick={(e) => {
            setDrop((prev) => false);
            navigate("/");
          }}
          className="flex-1 px-2 mx-2"
        >
          <span className=" font-bold text-base">
            JOULI <br />
            NAILS
          </span>
          <br />
        </div>
        <div className="flex-none  px-2 mx-2 lg:flex ">
          <div className="flex flex-col items-end">
            <div className="flex-none ">
              <button
                onClick={handleClick}
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`flex  items-stretch  flex-col items-end ${
                drop ? "" : "hidden"
              }`}
            >
              <a
                onClick={(e) => {
                  setDrop((prev) => false);
                  navigate("/");
                }}
                className="btn btn-ghost btn-sm rounded-btn "
              >
                ABOUT
              </a>

              <a
                to="/signin"
                onClick={(e) => {
                  setDrop((prev) => false);
                  navigate("/signin");
                }}
                className="btn btn-ghost btn-sm rounded-btn "
              >
                APPOINTMENT
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn ">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
