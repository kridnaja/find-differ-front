import React, { useEffect, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("EN");
  const [isOpenLang, setIsOpenLand] = useState(false);

  useEffect(()=>{

    if(    localStorage.getItem("LANG") ){
      setLang(localStorage.getItem("LANG"))
    }

  },[])
  return (
    <div className="w-screen h-screen  flex flex-col items-center justify-center bg-[url('BG.jpg')] bg-cover bg-center">
      <div className=" w-full h-[10%] top-0 absolute flex justify-between">
        <div className="pl-5">
          <img className="w-[50%] h-[100%] " src="EVA.svg" alt="" />
        </div>
        <div className="pr-5 cursor-pointer text-[2rem]">
          <div
          onClick={()=>setIsOpenLand(true)}
          >{lang}</div>
       {isOpenLang &&   <div>
            <div onClick={() =>{
              setIsOpenLand(false)
              localStorage.setItem("LANG", 'EN')
              return setLang("EN") }}>EN</div>
            <div onClick={() =>{
              setIsOpenLand(false)
              localStorage.setItem("LANG", 'TH')
              return setLang("TH") }}>TH</div>
          </div>}
        </div>
      </div>
      <div className="flex flex-col text-5xl gap-10 ">
        <div className="flex flex-col gap-10">
          <div
            onClick={() => (window.location = "hr")}
            className="bg-white hover:bg-[#D70321]  hover:text-white p-5 rounded-md cursor-pointer flex justify-center items-center"
          >
            {lang == 'EN' ? "HR" : "ทรัพยากรบุคคล" }
          </div>
          <div
            onClick={() => (window.location = "candidate")}
            className="bg-white hover:bg-[#D70321]  hover:text-white p-5 rounded-md  cursor-pointer flex justify-center items-center"
          >
             {lang == 'EN' ? "Applicants" : "ผู้สมัคร" }
          </div>
        </div>
      </div>
      <div className="w-full h-[10%] absolute bottom-0  flex justify-center items-center">
        <div className="cursor-pointer">
          <a
            href="https://www.facebook.com/MEWorx/"
            className="" // Add your desired styles here
            target="_blank" // Optional: opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
          >
            © 2024 Application | Created by MEWorx
          </a>
        </div>
      </div>
    </div>
  );
}
