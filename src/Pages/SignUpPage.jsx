import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const OnChanges = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.id]: e.target.value,
    }));
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/appointment");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-w-[360px]">
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col justify-center hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Please take a few seconds to sign in or sign up to make
              appointment.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  onChange={OnChanges}
                  id="name"
                  value={formData.name}
                  type="text"
                  placeholder="user name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={OnChanges}
                  type="text"
                  id="email"
                  value={formData.email}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={OnChanges}
                  id="password"
                  value={formData.password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  onClick={onsubmit}
                  type="button"
                  value="SIGN UP"
                  className="btn btn-accent bg-[#3AAFA9]"
                />
              </div>
              <div className="form-control mt-2 text-center">
                <h2 className="font-bold">OR</h2>
              </div>
              <div className="form-control mt-2">
                <Link
                  to="/signin"
                  className="btn btn-outline border-[#3AAFA9] hover:border-[#3AAFA9]/50 hover:bg-[#3AAFA9]/50 hover:text-black"
                >
                  BACK TO SIGN IN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
