import { HiArrowUpRight } from "react-icons/hi2";
const Service = () => {
  return (
    <div className="mt-[-700px] md:mt-[-300px] mx-5">
      <div className="ml-5 my-5 lg:ml-[200px] ">
        <h1 className="text-5xl md:text-[64px] text-[#094067]">Services</h1>
        <h1 className="text-5xl md:text-[64px] text-[#3DA9FC] font-bold #3DA9FC">
          We Provide
        </h1>
      </div>
      <div className=" lg:w-[1048px] mx-auto hover:border-b-8 border-[#094067] rounded-[40px] lg:my-10 mt-5">
        <div className="lg:w-[1048px] h-[200px] text-[#094067] mx-auto border-[4px] border-[#094067] rounded-[35px] hover:bg-[#5F6C7B] hover:text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-[50px] md:text-[64px]  font-bold lg:mt-10 ml-5">
              Political Content
            </h1>
            <h1 className="text-[60px] md:text-[120px] font-bold lg:mt-12 mr-5">
              <HiArrowUpRight></HiArrowUpRight>
            </h1>
          </div>
        </div>
      </div>
      <div className=" lg:w-[1048px] mx-auto hover:border-b-8 border-[#094067] rounded-[40px] lg:my-10  mt-5">
        <div className="lg:w-[1048px] h-[200px] text-[#094067] mx-auto border-[4px] border-[#094067] rounded-[35px] hover:bg-[#5F6C7B] hover:text-white">
          <div className="flex justify-between items-center">
            <h1 className=" text-[45px] md:text-[64px]  font-bold mt-10 lg:mt-12 ml-5">
              Translation
            </h1>
            <h1 className="text-[60px] md:text-[120px] font-bold mt-10 lg:mt-12 mr-5">
              <HiArrowUpRight></HiArrowUpRight>
            </h1>
          </div>
        </div>
      </div>
      <div className=" lg:w-[1048px] mx-auto hover:border-b-8 border-[#094067] rounded-[40px] lg:my-10  mt-5">
        <div className="lg:w-[1048px] h-[200px] text-[#094067] mx-auto border-[4px] border-[#094067] rounded-[35px] hover:bg-[#5F6C7B] hover:text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-[64px]  font-bold lg:mt-12 ml-5">
              WebSite Content
            </h1>
            <h1 className="text-[60px] md:text-[120px] font-bold lg:mt-12 mr-5">
              <HiArrowUpRight></HiArrowUpRight>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-[86px] ">
        <button className=" rounded-lg bg-[#3DA9FC] border-[#3DA9FC] border-b-8  ">
          <div className="flex items-center bg-[#EF4565]  px-20 py-3 md:py-5 border-4 border-[#094067] rounded-lg">
            <h1 className="text-white text-2xl font-bold  font1">KNOW MORE</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Service;
