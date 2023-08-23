import { HiArrowUpRight } from "react-icons/hi2";
const Service = () => {
  return (
    <div>
      <div className="ml-[400px]">
        <h1 className="text-[64px] text-[#094067]">Services</h1>
        <h1 className="text-[64px] text-[#3DA9FC] font-bold #3DA9FC">
          We Provide
        </h1>
      </div>
      <div className=" w-[1048px] mx-auto hover:border-b-8 border-[#094067] rounded-[40px] my-10">
        <div className="w-[1048px] h-[200px] text-[#094067] mx-auto border-[4px] border-[#094067] rounded-[35px] hover:bg-[#5F6C7B] hover:text-white">
          <div className="flex justify-between">
            <h1 className="text-[64px]  font-bold mt-12 ml-5">
              Political Content
            </h1>
            <h1 className="text-[120px] font-bold mt-12 mr-5">
              <HiArrowUpRight></HiArrowUpRight>
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-[1048px] mx-auto hover:border-b-8 border-[#094067] rounded-[40px] my-10">
        <div className="w-[1048px] h-[200px] text-[#094067] mx-auto border-[4px] border-[#094067] rounded-[35px] hover:bg-[#5F6C7B] hover:text-white">
          <div className="flex justify-between">
            <h1 className="text-[64px]  font-bold mt-12 ml-5">Translation</h1>
            <h1 className="text-[120px] font-bold mt-12 mr-5">
              <HiArrowUpRight></HiArrowUpRight>
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-[1048px] mx-auto hover:border-b-8 border-[#094067] rounded-[40px] my-10">
        <div className="w-[1048px] h-[200px] text-[#094067] mx-auto border-[4px] border-[#094067] rounded-[35px] hover:bg-[#5F6C7B] hover:text-white">
          <div className="flex justify-between">
            <h1 className="text-[64px]  font-bold mt-12 ml-5">
              Website Content
            </h1>
            <h1 className="text-[120px] font-bold mt-12 mr-5">
              <HiArrowUpRight></HiArrowUpRight>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[86px]">
        <button className=" rounded-lg bg-[#3DA9FC] border-[#3DA9FC] border-b-8  ">
          <div className="flex items-center bg-[#EF4565]  px-28 py-5 border-4 border-[#094067] rounded-lg">
            <h1 className="text-white text-2xl font-bold  font1">KNOW MORE</h1>
            <p className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M28.5 29V7M28.5 7H6.5M28.5 7L6.5 29"
                  stroke="white"
                  stroke-width="4"
                />
              </svg>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Service;
