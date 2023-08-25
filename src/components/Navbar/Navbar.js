/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <img
                  className="w-28"
                  src="https://s3-alpha-sig.figma.com/img/8b73/5cbb/14c0a24781efcac2dae9fe833f2f09bf?Expires=1693785600&Signature=eWZg2Wh2Sp4Gov9226PLY9cFmeM0hTK9O-jXvE3N3LammyZ~ZmqTJRryvE8b8VLf26sSWz7~tus3ttUwK78kLnZLo8QVQ0JNv~qdG-C88oHJuy-X0h0NlO0TZmE0o6op57MfymxfByyNnA8IR4dhtqQ645qiiDjGlgQl1OM44wjOcmNFfJfuXnnc~FADwChQ7KQp44kQgnIhFaRZyX~~KyuxsqeQurwMb0ZrXk9juKUN5IhQ7FqQcxWgZihWZC856irBycOCNEseJMXryodlmsaFp5pl0GXKUWGN~dj5RMv~S8VNrK7dBxhSyTELXttebNvvVmmueW5oS2h6FJow~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=" hover:text-indigo-200">
                  <a href="javascript:void(0)">Courses</a>
                </li>
                <li className=" hover:text-indigo-200">
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li className=" hover:text-indigo-200">
                  <a href="javascript:void(0)">About US</a>
                </li>
                <li className=" hover:text-indigo-200">
                  <a href="javascript:void(0)">Contact US</a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <a
                  href="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign in
                </a>
                <a
                  href="javascript:void(0)"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <a
              href="javascript:void(0)"
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Sign in
            </a>
            <a
              href="javascript:void(0)"
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
