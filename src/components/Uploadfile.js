import { ChangeEvent, useState } from "react";
import Buttonfonts from "../Setting/Buttonfonts";
import Selecttype from "../Setting/Selecttype";

export default function Uploadfile() {
  return (
    <>
      <div className="flex justify-center items-center mb-10 lg:drop-shadow-xl mt-20">
        <form
          action="/"
          className="w-full md:w-auto lg:border lg:border-gray-200 p-6 bg-white lg:flex lg:flex-row flex-col lg:basis-3/2 mt-10 lg:rounded-lg"
        >
          <div className="">
            <div className="mb-5 text-xl">Tải truyện của bạn</div>

            {/* TỰA TRUYỆN */}
            <div className="flex flex-row mb-2" id="tua_truyen">
              <div className="">Tựa truyện: </div>
              <input
                type="text"
                className="border border-gray-200 ml-3 px-3 w-[407px] rounded-md"
                placeholder="VD: One-Punch Man"
              />
            </div>

            <div className="text-[12px] -mt-1 text-gray-400 ml-24">
              Chọn một tựa truyện cho riêng bạn, nhưng cẩn thận kẻo trùng đấy
              nhé!
            </div>

            {/* GIỚI THIỆU */}
            <div className="mt-5 flex" id="intro">
              <div className="mr-5">Giới thiệu:</div>
              <div className="">
                <Buttonfonts />
              </div>
            </div>
            <input
              type="text"
              className="ml-[93px] border border-gray-200 w-[409px] rounded-b-md placeholder:ml-2"
              placeholder="Viết mô tả truyện..."
            />

            {/* THỂ LOẠI */}
            <div className="flex flex-row mt-5" id="type">
              <div className="">Thể loại:</div>
              <div className="ml-[22px]">
                <Selecttype />
              </div>
            </div>

            {/* UPLOAD FILES */}
            <div className="mt-4">
              <input type="file" className="cursor-pointer" />
            </div>

            <div className="text-sm flex mt-5 ">
              <input type="checkbox" className="mr-2" />
              <div className="">
                Tôi đồng ý với các{" "}
                <a href="./" className="text-blue-500">
                  Quy Định Về Việc Đăng Tải Truyện
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              {" "}
              <input
                type="submit"
                className="border-black border px-6 py-3 rounded-md hover:bg-gray-200 cursor-pointer w-auto h-auto text-xl"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
