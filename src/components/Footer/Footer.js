import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ibb.co/C6RhCFr/Screenshot-2023-08-28-093723.jpg')",
        backgroundSize: "100% 100%",
      }}
      className="h-[740px]"
    >
      <div className="ml-10 lg:ml-[209px] pt-[270px] lg:pt-[300px] mt-[50px]">
        <h1 className="text-white text-[45px] lg:text-[64px]">we’re here </h1>
        <h1 className="text-white text-[45px] lg:text-[64px] font-bold">
          Contact US !
        </h1>
      </div>
      <div className="md:flex justify-evenly items-center pt-10">
        <div className="flex items-center mt-5 mx-5">
          <div className="w-[114px] h-[114px] border-4 border-[#094067] rounded-xl p-5 bg-[#ED5A5A]">
            <h1 className=" text-white text-[50px] mt-3 ml-2">
              <FaPhone></FaPhone>
            </h1>
          </div>
          <div className="ml-5">
            <h1 className="text-[25px] md:text-[42px] text-white">
              9999900001
            </h1>
          </div>
        </div>
        <div className="flex items-center mt-5 mx-5">
          <div className="w-[114px] h-[114px] border-4 border-[#094067] rounded-xl p-5 bg-[#ED5A5A]">
            <h1 className=" text-white text-[50px]  ml-2">@</h1>
          </div>
          <div className="ml-5">
            <h1 className="text-[25px] md:text-[42px] text-white">
              sayhi@swachhakshar.in
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
