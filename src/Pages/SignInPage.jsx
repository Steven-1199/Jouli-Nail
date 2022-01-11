import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const OnChanges = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.id]: e.target.value,
    }));
  };

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      if (userCredential.user) {
        navigate("/appointment");
      }
    } catch (err) {
      toast.error("Bad User Creditials");
    }
  };
  return (
    <div className="min-w-[360px]">
      <div className="hero min-h-screen bg-white">
        <div className="flex-col justify-center hero-content lg:flex-row bg-white">
          <div className="text-center lg:text-left ">
            <h1 className="mb-5 text-5xl font-bold text-[#17252A]">
              Hello there
            </h1>
            <p className="mb-5 text-[#17252A]">
              Please take a few seconds to sign in or sign up to make
              appointment.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <div className="card-body ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[#17252A]">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  value={formData.email}
                  className="input input-bordered bg-white border-2 border-[#D2D4D7]"
                  onChange={OnChanges}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#17252A] ">Password</span>
                </label>
                <input
                  id="password"
                  onChange={OnChanges}
                  value={formData.password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-white border-2 border-[#D2D4D7]"
                />
                <label className="label">
                  <Link
                    to="/forgetpassword"
                    className="label-text-alt text-[#17252A]"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  onClick={onClick}
                  type="button"
                  value="Login"
                  className="btn btn-accent bg-[#3AAFA9]"
                />
              </div>
              <div className="form-control mt-2 text-center">
                <h2 className="font-bold text-[#17252A]">OR</h2>
              </div>
              <div className="form-control mt-2">
                <Link
                  to="/signup"
                  className="btn btn-outline border-[#3AAFA9] hover:border-[#3AAFA9]/50 hover:bg-[#3AAFA9]/50 hover:text-black text-[#17252A]"
                >
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
          <Link to="/" className="btn w-[7rem] rounded-3xl">
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
