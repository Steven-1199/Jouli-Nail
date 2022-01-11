import fbIcon from "../../img/facebook.png";
import phoneIcon from "../../img/phone-call.png";
import addressIcon from "../../img/address.png";

function ContactSection() {
  return (
    /*<div className="relative top-[60vh] h-[35vh] w-full bg-[#2B7A78] pt-2 min-w-[360px]">
      <h2 className="text-[30px] font-bold ml-6">CONTACT</h2>
      <div className="w-full h-[35vh] flex justify-center items-center absolute top-0 ">
        <div className="bg-white w-[75%] h-[20vh] rounded-lg flex flex-col justify-center items-center p-6 text-center">
          <p>(502) 331-0909</p>
          <p>986 Chambers Blvd, Bardstown, KY 40004</p>
        </div>
      </div>
      <a
        href="https://www.facebook.com/Jouilis-Nail-628772340556996"
        target="_blank"
      >
        <img src={fbIcon} className="w-[2rem] absolute bottom-2 right-2" />
      </a>
  </div>*/
    <div className="relative h-[45vh] w-[100vw] bg-[#2B7A78] pt-2 left-0 right-0 overflow-x-hidden max-w-full">
      <div className="flex items-center w-full px-4 py-10 bg-cover card bg-[#2B7A78]">
        <div className="card glass lg:card-side text-neutral-content min-w-[20rem] w-[50%]">
          <div className=" card-body">
            <h2 className="text-[#17252A] card-title text-[30px] font-bold ">
              CONTACT US
            </h2>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="card shadow-lg w-auto h-[4rem] bg-white flex flex-row items-center justify-center relative mb-4 min-w-[18rem]">
                <img
                  src={phoneIcon}
                  className="w-[2.5rem] h-auto absolute top-2 left-2"
                ></img>
                <p className="text-[#17252A] ">(502) 331-0909</p>
              </div>
              <div className="card shadow-lg w-auto h-[4rem] bg-white flex flex-row items-center justify-center relative text-center min-w-[18rem]">
                <img
                  src={addressIcon}
                  className="w-[2.5rem] h-auto absolute top-2 left-2"
                ></img>
                <p className="text-[#17252A] w-[10rem]">
                  (986 Chambers Blvd, Bardstown, KY 40004
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://www.facebook.com/Jouilis-Nail-628772340556996"
        target="_blank"
      >
        <img src={fbIcon} className="w-[2rem] absolute bottom-2 right-6" />
      </a>
    </div>
  );
}

export default ContactSection;
