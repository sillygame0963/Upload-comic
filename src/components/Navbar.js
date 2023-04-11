import React, { useState } from "react";
import ReactDOM from "react-dom";
import useScrollPosition from "../Setting/useScrollPosition";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/* ROW NAVIGATION BAR */}
      <div
        className={classNames(
          scrollPosition > 0 ? "shadow" : "shadow-none",
          "sticky -top-1 z-20 transition-shadow "
        )}
      >
        <header className="py-2 bg-[url('https://t4.ftcdn.net/jpg/03/65/65/49/360_F_365654951_AymALSPU3ykFgk7QsUMNznWP8tgNimej.jpg')] bg-no-repeat bg-cover bg-center">
          <nav className="flex justify-around items-center">
            <a href="./" className="">
              <img
                title="Logo Nettruyen"
                src="https://st.nettruyenvt.com/data/logos/logo-nettruyen.png"
                alt=""
                className="w-[150px] aspect-auto ml-44"
              />
            </a>

            <div className="logo cursor-pointer ml-[107px]">
              <input
                type="text"
                placeholder="Tìm truyện..."
                className="py-[5px] w-[500px] -ml-[310px] placeholder:pl-5"
              />
              <button className="" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 -ml-8 -mb-[5px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>

            <ul
              // className={`lg:flex lg:items-center lg:justify-end uppercase text-sm text-gray-500 font-medium lg:ts-menu-expanded ${
              //   toggle ? "" : "hidden"
              // }`}
              className="text-white"
            >
              {/* <li className="border-gray-700 rounded-full p-7 mr-10 border-solid border-2 bg-gray-100"></li> */}
              <li className="flex flex-row ">
                <a href="/" className="mr-[2px]">
                  Đăng nhập
                </a>
                <p>/</p>
                <a href="/" className="">
                  Đăng kí
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
