import pedi from "../../img/pedicure.jpg";
import mani from "../../img/manicure.jpg";
import fullset from "../../img/nail3.jpg";
import gel from "../../img/nail2.jpg";
import dip from "../../img/dip_powder.jpg";
import more from "../../img/nail1.jpg";

function ServiceSection() {
  return (
    <div className=" relative w-[100vw] h-[60vh]  min-h-[600px] left-0 right-0 overflow-x-hidden max-w-full text-[#17252A]">
      <div className="shadow-2xl bg-[#88bdbc] pt-4 w-full h-[60vh] min-h-[600px] max-w-full">
        <h2 className="text-[30px] font-bold ml-6">SERVICE</h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 w-fit  grid-flow-row text-center gap-x-none gap-y-4  justify-items-center mt-5">
            <div className="overflow-hidden relative w-[10rem] h-[6.5rem] rounded-3xl flex justify-center items-center  shadow-2xl">
              <img src={pedi} className="absolute opacity-60"></img>
              <h5 className="relative font-bold text-2xl ">Pedicure</h5>
            </div>
            <div className="shadow-2xl overflow-hidden relative w-[10rem] h-[6.5rem] rounded-3xl flex justify-center items-center">
              <img src={mani} className="absolute opacity-60"></img>
              <h5 className="relative font-bold text-2xl ">Manicure</h5>
            </div>
            <div className="overflow-hidden relative w-[10rem] h-[6.5rem] rounded-3xl flex justify-center items-center row-start-2 row-end-2 col-start-1 shadow-2xl">
              <img src={dip} className="absolute opacity-60"></img>
              <h5 className="relative font-bold text-2xl ">Dip Power</h5>
            </div>
            <div className="overflow-hidden relative w-[10rem] h-[6.5rem] rounded-3xl flex justify-center items-center row-start-3  col-start-1 shadow-2xl">
              <img src={fullset} className="absolute opacity-60"></img>
              <h5 className="relative font-bold text-2xl ">
                Acrylics/ FullSets
              </h5>
            </div>
            <div className="overflow-hidden relative w-[10rem] h-[14rem] rounded-3xl flex justify-center items-center row-start-2 row-end-4 col-start-2 row-span-2 shadow-2xl">
              <img src={gel} className="absolute opacity-60"></img>
              <h5 className="relative font-bold text-2xl ">Gel Polish</h5>
            </div>
            <div className="overflow-hidden relative w-[22rem] h-[6rem] rounded-3xl flex justify-center items-center  col-span-2 shadow-2xl">
              <img src={more} className="absolute opacity-60"></img>
              <h5 className="relative font-bold text-2xl ">And More...</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
