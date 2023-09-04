const Queries = () => {
  return (
    <div className="relative mb-[500px]">
      <div
        className=" bg-no-repeat bg-cover h-[790px] pt-5 lg:pt-[200px] px-10 lg:px-48"
        style={{
          backgroundImage: "url('https://i.ibb.co/4jjC0pq/Untitled-1.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="lg:w-[550px] mt-">
          <h1 className="text-[#094067] text-[50px] lg:text-[64px] font-semibold">
            We Answer
          </h1>
          <h1 className="text-white text-[50px] lg:text-[64px]">
            Your Queries
          </h1>
          <p className="text-black lg:text-white font-bold text-[24px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero
            architecto, voluptate iste temporibus minima! Eos, cum est!
            Nesciunt, quibusdam enim odio placeat unde porro culpa voluptatum
            quam sit fugit?
          </p>
        </div>
      </div>
      <form className="p-14 my-10 mx-2 lg:w-[1440px] lg:mx-auto border-4 border-[#094067] absolute top-[70%] lg:left-[200px] bg-white">
        <div className="flex justify-around items-center relative">
          <div className="hidden md:block lg:w-[530px] lg:h-[530px] border-4 border-[#094067]"></div>
          <div className="p-5">
            <div>
              <p className="text-[24px]">
                email id <span className="text-red-500">*</span>
              </p>
              <input
                className="input input-bordered w-full md:w-[455px] border-4 border-[#094067] mt-[7px]"
                type="email"
                name=""
                id=""
              />
            </div>
            <div>
              <p className="text-[24px]">
                Your Name <span className="text-red-500">*</span>
              </p>
              <input
                className="input input-bordered w-full md:w-[455px] border-4 border-[#094067] mt-[7px]"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <p className="text-[24px]">
                Select Purpose <span className="text-red-500">*</span>
              </p>
              <select className="select select-bordered w-full border-4 border-[#094067]">
                <option disabled selected>
                  Select
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div>
              <p className="text-[24px]">
                Phone Number <span className="text-red-500">*</span>
              </p>
              <input
                className="input input-bordered w-full md:w-[455px] border-4 border-[#094067] mt-[7px]"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="  ">
          <button className="border-4 border-[#094067] px-[50px] md:px-[80px] py-2 md:py-3 text-[24px] font-bold text-white bg-[#3DA9FC] absolute bottom-[-40px] left-[70px] lg:left-[40%]">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Queries;
//query comments added
