import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const OnChanges = (e) => {
    setEmail(e.target.value);
  };
  const onClick = async (e) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setEmail("");
      toast.success("Email was sent");
    } catch (err) {
      toast.error("Something wrong");
    }
  };
  return (
    <div className="min-w-[360px]">
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col justify-center hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">Forget Password</h1>
            <p className="mb-5">
              Please type in your email and we will send a link to reset your
              password.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  value={email}
                  className="input input-bordered"
                  onChange={OnChanges}
                />
              </div>

              <div className="form-control mt-6">
                <input
                  onClick={onClick}
                  type="button"
                  value="Send Link"
                  className="btn btn-accent bg-[#3AAFA9]"
                />
              </div>
            </div>
          </div>
          <Link to="/signin" className="btn w-[10rem] rounded-xl">
            BACK TO SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
