import checkIcon from "../img/check.png";
import { Link } from "react-router-dom";

function ThankyouPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <div className="mb-5 flex justify-evenly items-baseline">
            <h1 className="text-5xl font-bold">Thank You</h1>
            <img src={checkIcon} className="w-10 h-10" />
          </div>
          <p className="mb-5">
            We will get back to you as soon as possible.<br></br> Thank you for
            your support
          </p>
          <Link to="/" className="btn btn-accent">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankyouPage;
