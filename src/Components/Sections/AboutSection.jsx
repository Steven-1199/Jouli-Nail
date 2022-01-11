import aboutBg from "../../img/about-background.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="w-[100vw] h-[70vh] relative     overflow-x-hidden max-w-full bg-[#DCDCDC] rounded text-[#17252A]">
      <div className="hero min-h-full ">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={aboutBg}
            className="rounded-lg shadow-2xl  sm:w-[15rem] max-w-[25rem]"
          ></img>
          <div>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Jouili Nail isn't just a nail salon but also a place that allows
              you to recharge and detox from everyday life.
            </p>
            <div className="">
              <h4 className="text-lg font-bold ">Best Service, Best Price,</h4>
              <h4 className="pl-[15%] text-lg font-bold">
                Wonderful Experience
              </h4>
            </div>
            <Link
              to=""
              className="btn btn-outline btn-accent w-[15rem] rounded-3xl mt-4"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
