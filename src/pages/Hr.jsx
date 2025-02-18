import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayDate from "../component/DisplayDate";

import { PiTimerBold } from "react-icons/pi";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import * as XLSX from "xlsx";

export default function Hr() {
  const [isOpen, setIsOpen] = useState(false);

  const [candidateData, setCandidateData] = useState([]);
  const [selectCandidate, setSelectCandidate] = useState("");

  const [singleCandidateData, setSingleCandidateData] = useState([]);

  const [isOpenPreviewPicture, setIsOpenPreviewPicture] = useState(false);

  const [selectPicturePreview, setSelectPicturePreview] = useState("");

  const [timeCountData, setTimeCountData] = useState([]);

  const [allPictures, setAllpictures] = useState([]);

  const previewArrays = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
  ];
  // Check if singgleCandidateData is defined and is an object
  if (singleCandidateData && typeof singleCandidateData === "object") {
    // Check if picTimes is defined and is a string
    if (
      singleCandidateData?.timeCounts &&
      typeof singleCandidateData?.timeCounts === "string"
    ) {
      singleCandidateData.timeCounts = singleCandidateData?.timeCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var timeCountsArray = JSON.parse(`[${singleCandidateData.timeCounts}]`);

      singleCandidateData.clickCounts = singleCandidateData?.clickCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var clickCountsArray = JSON.parse(`[${singleCandidateData.clickCounts}]`);

      singleCandidateData.scoreCounts = singleCandidateData?.scoreCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var scoreCountsArray = JSON.parse(`[${singleCandidateData.scoreCounts}]`);

      singleCandidateData.skipCounts = singleCandidateData?.skipCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var skipCountsArray = JSON.parse(`[${singleCandidateData.skipCounts}]`);
    } else {
      console.error("picTimes is not defined or is not a string");
    }
  }

  const exportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert data to a worksheet
    const ws = XLSX.utils.json_to_sheet(candidateData);
    // const ws2 = XLSX.utils.json_to_sheet(allPictures);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Export the workbook to a file
    XLSX.writeFile(wb, "เเบบทดสอบเกมจับผิด.xlsx");
    // XLSX.writeFile(wb, "เเบบทดสอบเกมจับผิด.xlsx");
  };

  useEffect(() => {
    axios.get("http://192.168.0.169:4567/readAllCandidates").then((res) => {
      console.log(res.data);
      setCandidateData(res.data);
    });

    axios
      .get(
        `http://192.168.0.169:4567/readSingleCandidate?targetId=${selectCandidate}`
      )
      .then((res) => {
        setSingleCandidateData(res.data);
      });
    // http://192.168.0.169:5173/

    axios
      .get("http://192.168.0.169:4567/readAllPictures")
      .then((res) => setAllpictures(res.data));
  }, [selectCandidate]);

  return (
    <div className="w-screen h-screen bg-[url('BG.jpg')] bg-cover bg-center flex items-center justify-center px-[2rem] py-[2rem]">
      <div className="flex flex-col h-full w-full  bg-opacity-45 px-[0.5rem] pt-[0.5rem] pb-[0.5rem] rounded-[0.5rem] ">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center px-[1rem]">
            <div className="flex pb-[1rem] gap-5">
              {/* <p className="font-bold text-[3rem]"> 
                
                 </p> */}
              <img src="/EVA.svg" className="w-[40%] h-[30%]" alt="" />
            </div>
            <button
              onClick={exportToExcel}
              className="bg-green-700 text-white p-2  rounded-md absolute left-[15%]"
            >
              Export to Excel File
            </button>
            <div className="flex pb-[1rem]">
              <p
                onClick={() => (window.location = "/")}
                className="font-bold text-[1.5rem] cursor-pointer"
              >
                Back
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col rounded-md bg-white w-full h-full pb-[1.5rem] overflow-y-auto bg-opacity-80">
          <div className="flex items-center w-full h-[3rem] pr-[1.5rem] pl-[0.5rem] mb-[0.5rem] bg-[#D70321]  text-white sticky top-0 ">
            <div className="w-[3%] flex justify-center">
              <p className="font-bold text-[1.4rem]">#</p>
            </div>
            <div className="w-[26%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Fisrt name</p>
            </div>
            <div className="w-[26%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Last name</p>
            </div>
            <div className="w-[10%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Scores</p>
            </div>
            <div className="w-[15%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Total Time</p>
            </div>
            <div className="w-[15%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Total Clicks</p>
            </div>
            <div className="w-[15%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Total Skips</p>
            </div>
            <div className="w-[15%] flex justify-center">
              <p className="font-bold text-[1.4rem]">Date</p>
            </div>
            <div className="w-[5%] flex justify-center">
              <p className="font-bold text-[1.4rem]"></p>
            </div>
          </div>
          {candidateData.map((data, i) => {
            return (
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                  setSelectCandidate(data.id);
                }}
                key={data.id}
                className={`flex items-center w-full h-[4rem] pr-[1.5rem] pl-[0.5rem] mb-[0.5rem]  hover:bg-gray-300 cursor-pointer ${
                  i % 2 ? "bg-gray-200" : "bg-gray-100"
                }`}
              >
                <div className="w-[3%] flex justify-center">
                  <p className="font-bold text-[1rem]">{i + 1}</p>
                </div>
                <div className="w-[26%] flex justify-center">
                  <p className="font-bold text-[1rem]">{data.firstName}</p>
                </div>
                <div className="w-[26%] flex justify-center">
                  <p className="font-bold text-[1rem]">{data.lastName}</p>
                </div>
                <div className="w-[10%] flex justify-center">
                  <p className="font-bold text-[1rem]">{data.score}</p>
                </div>
                <div className="w-[15%] flex justify-center">
                  <p className="font-bold text-[1rem] ">
                    {Math.floor(data.totalTime / 60) + "m"}{" "}
                    {(data.totalTime % 60) + "s"}
                  </p>
                </div>
                <div className="w-[15%] flex justify-center">
                  <p className="font-bold text-[1rem] ">{data.totalClick}</p>
                </div>
                <div className="w-[15%] flex justify-center">
                  <p className="font-bold text-[1rem] ">{data.totalSkip}</p>
                </div>
                <div className="w-[15%] flex justify-center">
                  <DisplayDate timestamp={data.createdAt} />
                </div>
                <div className="w-[5%] flex justify-center">
                  <p className="font-bold text-[1rem]"></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-[3rem] top-[10rem] flex items-start bg-red-500 w-[25%]">
          <div className="bg-gray-200 w-[100%] h-[60vh] flex justify-start items-center flex-col ">
            <div className="flex w-full h-full flex-col">
              <div className="w-full flex flex-row justify-between items-center px-[0.5rem] py-[0.5rem] bg-[#D70321]  rounded-t-[0.5rem]">
                <p className="font-bold text-[1.5rem] text-white"></p>
                <svg
                  onClick={() => setIsOpen(!isOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="cursor-pointer w-[1.5rem] h-[1.5rem] text-white  "
                >
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex flex-wrap w-[99%] h-full overflow-y-scroll gap-2 mb-[1rem] m-1">
                {previewArrays.map((data, i) => {
                  return (
                    <div
                      onClick={() => setSelectPicturePreview(data.id)}
                      key={data.id}
                      className={`w-[31%] h-[26%] p-3 rounded-md text-white  ${
                        scoreCountsArray && scoreCountsArray[0][i] > 0
                          ? "bg-green-500 "
                          : "bg-gray-500"
                      } flex flex-col items-center gap-1`}
                    >
                      <div>Picture {data.id}</div>
                      <img
                        className={`w-[70%] h-[39%] object-cover cursor-pointer rounded-md `}
                        onClick={() =>
                          setIsOpenPreviewPicture(!isOpenPreviewPicture)
                        }
                        src={`images/pic${data.id}-1.jpg`}
                        alt=""
                      />
                      <div className=" w-[100%] h-[100%]  justify-around  text-[100%]  flex ">
                        <div className="flex gap-1 items-center ">
                          <FaMousePointer />
                          <div>
                            {clickCountsArray && clickCountsArray[0][i]}
                          </div>
                        </div>
                        <div className="flex gap-1  items-center ">
                          <PiTimerBold />
                          <div> {timeCountsArray && timeCountsArray[0][i]}</div>
                        </div>
                        {/* <div className="flex gap-1  items-center ">
                          <MdCheckCircleOutline />
                         <div>{scoreCountsArray && scoreCountsArray[0][i]}</div>
                        </div> */}
                        <div className="flex gap-1  items-center ">
                          <IoPlaySkipForwardSharp />
                          <div>{skipCountsArray && skipCountsArray[0][i]}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenPreviewPicture && (
        <div className="w-screen h-screen bg-black absolute flex items-center justify-center bg-opacity-50">
          <div className="h-[70%] w-[50%] ">
            <div className=" text-white text-5xl   w-full flex justify-end ">
              <div></div>
              <div
                onClick={() => setIsOpenPreviewPicture(!isOpenPreviewPicture)}
                className="cursor-pointer"
              >
                X
              </div>
            </div>
            <img
              className="h-full w-full bg-gray-400 rounded-md  "
              src={`images/pic${selectPicturePreview}-1.jpg`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}
