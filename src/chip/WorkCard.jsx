import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
// import { Link } from "react-router-dom";
const openLinkInNewTab = (url) => {
  window.open(url, "_blank");
};

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center "
          >
            <POPUP className="img-content relative">
              <div className="w-full max-w-sm sm:max-w-full h-72 sm:h-64 lg:h-80 mx-auto hover:scale-105 transition-transform duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-center rounded-md shadow-md transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-900 text-xl leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  {/* <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </Link> */}

                  <button
                    onClick={() => openLinkInNewTab(data.link)}
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </button>
                  <br className="w-[2px] bg-white" />
                  <button
                    onClick={() => openLinkInNewTab(data.git)}
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </button>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-2xl mt-5 font-medium sm:text-lg">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
