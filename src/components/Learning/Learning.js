import { motion } from "framer-motion";

const Learning = () => {
  return (
    <div className="lg:mt-[290px]">
      <div className="lg:ml-[251px]">
        <h1 className=" text-[40px]  ml-10 md:text-[64px] text-[#3D3D3D]">
          Your (Learning) Journey
          <br />
          <span className="font-bold text-[#3DA9FC]">With US!</span>
        </h1>
      </div>
      <div className="lg:w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:ml-10">
          <div className="   pb-20 border-b-4 border-[#094067] mt-[40px]">
            <div className="flex justify-between mt-[60px]">
              <div>
                <div className="flex justify-between items-center">
                  <div className="ml-[22px]">
                    <h1 className="text-[42px] font-semibold  text-[#EF4565]">
                      Header
                    </h1>
                    <h1 className="text-[32px] text-[#094067]">Header</h1>
                  </div>
                  <div className="mr-[24px]">
                    <h1 className="text-[88px] font-bold text-[#EF4565]">1</h1>
                  </div>
                </div>
                <p className=" mx-[16px] font-sans">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet interdum et
                  auctor nullam in nunc non arcu erat. Adipiscing maecenas
                  elementum et proin tellus et. Proin urna euismod.
                </p>
              </div>
            </div>
          </div>
          <div className="   pb-20 border-b-4 border-[#094067] mt-[40px]">
            <div className="flex justify-between mt-[60px]">
              <div>
                <div className="flex justify-between items-center">
                  <div className="ml-[22px]">
                    <h1 className="text-[42px] font-semibold  text-[#EF4565]">
                      Header
                    </h1>
                    <h1 className="text-[32px] text-[#094067]">Header</h1>
                  </div>
                  <div className="mr-[24px]">
                    <h1 className="text-[88px] font-bold text-[#EF4565]">2</h1>
                  </div>
                </div>
                <p className=" mx-[16px] font-sans">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet interdum et
                  auctor nullam in nunc non arcu erat. Adipiscing maecenas
                  elementum et proin tellus et. Proin urna euismod.
                </p>
              </div>
            </div>
          </div>
          <div className="   pb-20 border-b-4 border-[#094067] mt-[40px]">
            <div className="flex justify-between mt-[60px]">
              <div>
                <div className="flex justify-between items-center">
                  <div className="ml-[22px]">
                    <h1 className="text-[42px] font-semibold  text-[#EF4565]">
                      Header
                    </h1>
                    <h1 className="text-[32px] text-[#094067]">Header</h1>
                  </div>
                  <div className="mr-[24px]">
                    <h1 className="text-[88px] font-bold text-[#EF4565]">3</h1>
                  </div>
                </div>
                <p className=" mx-[16px] font-sans">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet interdum et
                  auctor nullam in nunc non arcu erat. Adipiscing maecenas
                  elementum et proin tellus et. Proin urna euismod.
                </p>
              </div>
            </div>
          </div>
          <div className="   pb-20 border-b-4 border-[#094067] mt-[40px]">
            <div className="flex justify-between mt-[60px]">
              <div>
                <div className="flex justify-between items-center">
                  <div className="ml-[22px]">
                    <h1 className="text-[42px] font-semibold  text-[#EF4565]">
                      Header
                    </h1>
                    <h1 className="text-[32px] text-[#094067]">Header</h1>
                  </div>
                  <div className="mr-[24px]">
                    <h1 className="text-[88px] font-bold text-[#EF4565]">4</h1>
                  </div>
                </div>
                <p className=" mx-[16px] font-sans">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet interdum et
                  auctor nullam in nunc non arcu erat. Adipiscing maecenas
                  elementum et proin tellus et. Proin urna euismod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/Kw2vB4S/bg-dasheddd.jpg')",
          backgroundSize: "100% ",
        }}
        className="bg-no-repeat bg-cover mb-5 lg:h-[790px] flex justify-center mt-[50px] relative"
      >
        <div className="lg:mt-10">
          <button className="bg-[#3DA9FC] rounded-lg border-[rgb(239,69,101)] border-b-8  ">
            <div className="flex items-center bg-[ #EF4565] px-16 py-3 md:px-28 md:py-5 border-4 border-[#094067] rounded-lg">
              <h1 className="text-white text-2xl font-bold hover:ml-4 duration-500 font1">
                Show More
              </h1>
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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className=" absolute  lg:right-[207px] hidden md:block bottom-[450px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            viewBox="0 0 106 106"
            fill="none"
          >
            <g filter="url(#filter0_d_432_2284)">
              <mask id="path-1-inside-1_432_2284" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M59 0H41V29L20.2893 8.28932L7.56141 21.0172L27.5442 41H0V59H28L8.28932 78.7107L21.0172 91.4386L41 71.4558V100H59V72.4558L78.2721 91.7279L91 79L71 59H100V41H71.4558L91.7279 20.7279L79 8L59 28V0Z"
                />
              </mask>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59 0H41V29L20.2893 8.28932L7.56141 21.0172L27.5442 41H0V59H28L8.28932 78.7107L21.0172 91.4386L41 71.4558V100H59V72.4558L78.2721 91.7279L91 79L71 59H100V41H71.4558L91.7279 20.7279L79 8L59 28V0Z"
                fill="#EF4565"
              />
              <path
                d="M41 0V-4H37V0H41ZM59 0H63V-4H59V0ZM41 29L38.1716 31.8284L45 38.6568V29H41ZM20.2893 8.28932L23.1178 5.46089L20.2893 2.63246L17.4609 5.46089L20.2893 8.28932ZM7.56141 21.0172L4.73298 18.1888L1.90455 21.0172L4.73298 23.8457L7.56141 21.0172ZM27.5442 41V45H37.201L30.3726 38.1716L27.5442 41ZM0 41V37H-4V41H0ZM0 59H-4V63H0V59ZM28 59L30.8284 61.8284L37.6569 55H28V59ZM8.28932 78.7107L5.4609 75.8822L2.63247 78.7107L5.4609 81.5391L8.28932 78.7107ZM21.0172 91.4386L18.1888 94.267L21.0172 97.0955L23.8457 94.267L21.0172 91.4386ZM41 71.4558H45V61.799L38.1716 68.6274L41 71.4558ZM41 100H37V104H41V100ZM59 100V104H63V100H59ZM59 72.4558L61.8284 69.6274L55 62.799V72.4558H59ZM78.2721 91.7279L75.4436 94.5564L78.2721 97.3848L81.1005 94.5564L78.2721 91.7279ZM91 79L93.8284 81.8284L96.6569 79L93.8284 76.1716L91 79ZM71 59V55H61.3431L68.1716 61.8284L71 59ZM100 59V63H104V59H100ZM100 41H104V37H100V41ZM71.4558 41L68.6274 38.1716L61.799 45H71.4558V41ZM91.7279 20.7279L94.5564 23.5563L97.3848 20.7279L94.5564 17.8995L91.7279 20.7279ZM79 8L81.8284 5.17157L79 2.34314L76.1716 5.17157L79 8ZM59 28H55V37.6569L61.8284 30.8284L59 28ZM41 4H59V-4H41V4ZM45 29V0H37V29H45ZM17.4609 11.1177L38.1716 31.8284L43.8284 26.1716L23.1178 5.46089L17.4609 11.1177ZM10.3898 23.8457L23.1178 11.1177L17.4609 5.46089L4.73298 18.1888L10.3898 23.8457ZM30.3726 38.1716L10.3898 18.1888L4.73298 23.8457L24.7157 43.8284L30.3726 38.1716ZM0 45H27.5442V37H0V45ZM4 59V41H-4V59H4ZM28 55H0V63H28V55ZM11.1178 81.5391L30.8284 61.8284L25.1716 56.1716L5.4609 75.8822L11.1178 81.5391ZM23.8457 88.6102L11.1178 75.8822L5.4609 81.5391L18.1888 94.267L23.8457 88.6102ZM38.1716 68.6274L18.1888 88.6102L23.8457 94.267L43.8284 74.2843L38.1716 68.6274ZM45 100V71.4558H37V100H45ZM59 96H41V104H59V96ZM55 72.4558V100H63V72.4558H55ZM81.1005 88.8995L61.8284 69.6274L56.1716 75.2843L75.4436 94.5564L81.1005 88.8995ZM88.1716 76.1716L75.4436 88.8995L81.1005 94.5564L93.8284 81.8284L88.1716 76.1716ZM68.1716 61.8284L88.1716 81.8284L93.8284 76.1716L73.8284 56.1716L68.1716 61.8284ZM100 55H71V63H100V55ZM96 41V59H104V41H96ZM71.4558 45H100V37H71.4558V45ZM88.8995 17.8995L68.6274 38.1716L74.2843 43.8284L94.5564 23.5563L88.8995 17.8995ZM76.1716 10.8284L88.8995 23.5563L94.5564 17.8995L81.8284 5.17157L76.1716 10.8284ZM61.8284 30.8284L81.8284 10.8284L76.1716 5.17157L56.1716 25.1716L61.8284 30.8284ZM55 0V28H63V0H55Z"
                fill="#FFFFFE"
                mask="url(#path-1-inside-1_432_2284)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_432_2284"
                x="0"
                y="0"
                width="106"
                height="106"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6" dy="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0352941 0 0 0 0 0.25098 0 0 0 0 0.403922 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_432_2284"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_432_2284"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Learning;
