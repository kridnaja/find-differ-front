import { useState, useEffect } from "react";
import Pic1 from "../pictures/Pic1";
import Pic2 from "../pictures/Pic2";
import Pic3 from "../pictures/Pic3";
import Pic4 from "../pictures/Pic4";
import Pic5 from "../pictures/Pic5";
import PicEnd from "../pictures/PicEnd";
import Start from "../pictures/Start";
import Pic6 from "../pictures/Pic6";
import Pic7 from "../pictures/Pic7";
import Pic8 from "../pictures/Pic8";
import Pic9 from "../pictures/Pic9";
import Pic10 from "../pictures/Pic10";

import axios from "axios";
import Pic11 from "../pictures/Pic11";
import Pic12 from "../pictures/Pic12";
import Pic13 from "../pictures/Pic13";
import Pic14 from "../pictures/Pic14";
import Pic15 from "../pictures/Pic15";
import Pic16 from "../pictures/Pic16";
import Pic17 from "../pictures/Pic17";
import Pic18 from "../pictures/Pic18";
import Pic19 from "../pictures/Pic19";
import Pic20 from "../pictures/Pic20";
import Pic21 from "../pictures/Pic21";
import Pic22 from "../pictures/Pic22";
import Pic23 from "../pictures/Pic23";
import Pic24 from "../pictures/Pic24";
import Pic25 from "../pictures/Pic25";
import Pic26 from "../pictures/Pic26";
import Pic27 from "../pictures/Pic27";
import Pic28 from "../pictures/Pic28";
import Pic29 from "../pictures/Pic29";
import Pic30 from "../pictures/Pic30";

export default function Candidate() {
  const [count, setCount] = useState(600);

  const [countEachPhoto, setCountEachPhoto] = useState(0);
  const [pic, setPic] = useState(0);

  const [isStart, setIsStart] = useState(false);

  const [topScorer, setTopScorer] = useState([]);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    totalClick: 0,
    totalSkip: 0,
    score: 0,
    time: 0,
    pic1: 0,
    pic2: 0,
    pic3: 0,
    pic4: 0,
    pic5: 0,
    pic6: 0,
    pic7: 0,
    pic8: 0,
    pic9: 0,
    pic10: 0,

    pic11: 0,
    pic12: 0,
    pic13: 0,
    pic14: 0,
    pic15: 0,
    pic16: 0,
    pic17: 0,
    pic18: 0,
    pic19: 0,
    pic20: 0,

    pic21: 0,
    pic22: 0,
    pic23: 0,
    pic24: 0,
    pic25: 0,
    pic26: 0,
    pic27: 0,
    pic28: 0,
    pic29: 0,
    pic30: 0,

    click1: 0,
    click2: 0,
    click3: 0,
    click4: 0,
    click5: 0,
    click6: 0,
    click7: 0,
    click8: 0,
    click9: 0,
    click10: 0,

    click11: 0,
    click12: 0,
    click13: 0,
    click14: 0,
    click15: 0,
    click16: 0,
    click17: 0,
    click18: 0,
    click19: 0,
    click20: 0,

    click21: 0,
    click22: 0,
    click23: 0,
    click24: 0,
    click25: 0,
    click26: 0,
    click27: 0,
    click28: 0,
    click29: 0,
    click30: 0,

    skip1: 0,
    skip2: 0,
    skip3: 0,
    skip4: 0,
    skip5: 0,
    skip6: 0,
    skip7: 0,
    skip8: 0,
    skip9: 0,
    skip10: 0,

    skip11: 0,
    skip12: 0,
    skip13: 0,
    skip14: 0,
    skip15: 0,
    skip16: 0,
    skip17: 0,
    skip18: 0,
    skip19: 0,
    skip20: 0,

    skip21: 0,
    skip22: 0,
    skip23: 0,
    skip24: 0,
    skip25: 0,
    skip26: 0,
    skip27: 0,
    skip28: 0,
    skip29: 0,
    skip30: 0,

    isCorrect1: 0,
    isCorrect2: 0,
    isCorrect3: 0,
    isCorrect4: 0,
    isCorrect5: 0,
    isCorrect6: 0,
    isCorrect7: 0,
    isCorrect8: 0,
    isCorrect9: 0,
    isCorrect10: 0,

    isCorrect11: 0,
    isCorrect12: 0,
    isCorrect13: 0,
    isCorrect14: 0,
    isCorrect15: 0,
    isCorrect16: 0,
    isCorrect17: 0,
    isCorrect18: 0,
    isCorrect19: 0,
    isCorrect20: 0,

    isCorrect21: 0,
    isCorrect22: 0,
    isCorrect23: 0,
    isCorrect24: 0,
    isCorrect25: 0,
    isCorrect26: 0,
    isCorrect27: 0,
    isCorrect28: 0,
    isCorrect29: 0,
    isCorrect30: 0,
  });

  const [totalClick, setTotalClcik] = useState(0);

  useEffect(() => {
    const saveRecord = () => {
      axios.post("http://192.168.0.169:4567/create", input);
    };
    if (pic === 30) {
      saveRecord();
    }
  }, [pic]);

  const [pageX1, setPageX1] = useState("");
  const [pageY1, setPageY1] = useState("");

  const [pageX2, setPageX2] = useState("");
  const [pageY2, setPageY2] = useState("");

  const [testX, setTestX] = useState("");
  const [testY, setTestY] = useState("");

  let picss = [
    { pic: 0, y1: 42, x1: 630, y2: 42, x2: 1390 },
    { pic: 1, y1: 375, x1: 520, y2: 375, x2: 1270 },
    { pic: 2, y1: 410, x1: 655, y2: 410, x2: 1410 },
    { pic: 3, y1: 500, x1: 275, y2: 500, x2: 1040 },
    { pic: 4, y1: 490, x1: 470, y2: 490, x2: 1225 },
    { pic: 5, y1: 220, x1: 410, y2: 220, x2: 1160 },
    { pic: 6, y1: 470, x1: 535, y2: 470, x2: 1290 },
    { pic: 7, y1: 115, x1: 385, y2: 115, x2: 1140 },
    { pic: 8, y1: 105, x1: 660, y2: 105, x2: 1415 },
    { pic: 9, y1: 25, x1: 625, y2: 25, x2: 1380 },
    { pic: 10, y1: 425, x1: 100, y2: 425, x2: 855 },
    { pic: 11, y1: 295, x1: 645, y2: 295, x2: 1400 },
    { pic: 12, y1: 105, x1: 625, y2: 105, x2: 1380 },
    { pic: 13, y1: 245, x1: 400, y2: 245, x2: 1150 },
    { pic: 14, y1: 520, x1: 710, y2: 520, x2: 1460 },
    { pic: 15, y1: 150, x1: 720, y2: 150, x2: 1475 },
    { pic: 16, y1: 100, x1: 315, y2: 100, x2: 1070 },
    { pic: 17, y1: 340, x1: 155, y2: 340, x2: 910 },
    { pic: 18, y1: 50, x1: 310, y2: 50, x2: 1070 },
    { pic: 19, y1: 190, x1: 280, y2: 190, x2: 1020 },
    { pic: 20, y1: 485, x1: 660, y2: 485, x2: 1410 },
    { pic: 21, y1: 250, x1: 250, y2: 250, x2: 1000 },
    { pic: 22, y1: 215, x1: 650, y2: 215, x2: 1405 },
    { pic: 23, y1: 385, x1: 495, y2: 385, x2: 1250 },
    { pic: 24, y1: 110, x1: 690, y2: 110, x2: 1440 },
    { pic: 25, y1: 305, x1: 190, y2: 305, x2: 945 },
    { pic: 26, y1: 30, x1: 440, y2: 30, x2: 1190 },
    { pic: 27, y1: 435, x1: 50, y2: 435, x2: 805 },
    { pic: 28, y1: 365, x1: 450, y2: 365, x2: 1200 },
    { pic: 29, y1: 510, x1: 460, y2: 510, x2: 1215 },
  ];
  useEffect(() => {
    setCountTo10(0);
    setPageX1(picss[pic]?.x1);
    setPageY1(picss[pic]?.y1);

    setPageX2(picss[pic]?.x2);
    setPageY2(picss[pic]?.y2);
  }, [pic]);

  const handleOnClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setTestX(x);
    setTestY(y);
  };
  if (isStart === true && pic !== 30) {
    setTimeout(() => {
      setCount(count - 1);
      setCountEachPhoto(countEachPhoto + 1);
      if (pic !== 30) {
        setInput((prevInput) => ({ ...prevInput, time: input.time + 1 }));
      }
      if (pic === 0) {
        setInput((prevInput) => ({ ...prevInput, pic1: input.pic1 + 1 }));
      }
      if (pic === 1) {
        setInput((prevInput) => ({ ...prevInput, pic2: input.pic2 + 1 }));
      }
      if (pic === 2) {
        setInput((prevInput) => ({ ...prevInput, pic3: input.pic3 + 1 }));
      }
      if (pic === 3) {
        setInput((prevInput) => ({ ...prevInput, pic4: input.pic4 + 1 }));
      }
      if (pic === 4) {
        setInput((prevInput) => ({ ...prevInput, pic5: input.pic5 + 1 }));
      }
      if (pic === 5) {
        setInput((prevInput) => ({ ...prevInput, pic6: input.pic6 + 1 }));
      }
      if (pic === 6) {
        setInput((prevInput) => ({ ...prevInput, pic7: input.pic7 + 1 }));
      }
      if (pic === 7) {
        setInput((prevInput) => ({ ...prevInput, pic8: input.pic8 + 1 }));
      }
      if (pic === 8) {
        setInput((prevInput) => ({ ...prevInput, pic9: input.pic9 + 1 }));
      }
      if (pic === 9) {
        setInput((prevInput) => ({ ...prevInput, pic10: input.pic10 + 1 }));
      }

      if (pic === 10) {
        setInput((prevInput) => ({ ...prevInput, pic11: input.pic11 + 1 }));
      }
      if (pic === 11) {
        setInput((prevInput) => ({ ...prevInput, pic12: input.pic12 + 1 }));
      }
      if (pic === 12) {
        setInput((prevInput) => ({ ...prevInput, pic13: input.pic13 + 1 }));
      }
      if (pic === 13) {
        setInput((prevInput) => ({ ...prevInput, pic14: input.pic14 + 1 }));
      }
      if (pic === 14) {
        setInput((prevInput) => ({ ...prevInput, pic15: input.pic15 + 1 }));
      }
      if (pic === 15) {
        setInput((prevInput) => ({ ...prevInput, pic16: input.pic16 + 1 }));
      }
      if (pic === 16) {
        setInput((prevInput) => ({ ...prevInput, pic17: input.pic17 + 1 }));
      }
      if (pic === 17) {
        setInput((prevInput) => ({ ...prevInput, pic18: input.pic18 + 1 }));
      }
      if (pic === 18) {
        setInput((prevInput) => ({ ...prevInput, pic19: input.pic19 + 1 }));
      }
      if (pic === 19) {
        setInput((prevInput) => ({ ...prevInput, pic20: input.pic20 + 1 }));
      }

      if (pic === 20) {
        setInput((prevInput) => ({ ...prevInput, pic21: input.pic21 + 1 }));
      }
      if (pic === 21) {
        setInput((prevInput) => ({ ...prevInput, pic22: input.pic22 + 1 }));
      }
      if (pic === 22) {
        setInput((prevInput) => ({ ...prevInput, pic23: input.pic23 + 1 }));
      }
      if (pic === 23) {
        setInput((prevInput) => ({ ...prevInput, pic24: input.pic24 + 1 }));
      }
      if (pic === 24) {
        setInput((prevInput) => ({ ...prevInput, pic25: input.pic25 + 1 }));
      }
      if (pic === 25) {
        setInput((prevInput) => ({ ...prevInput, pic26: input.pic26 + 1 }));
      }
      if (pic === 26) {
        setInput((prevInput) => ({ ...prevInput, pic27: input.pic27 + 1 }));
      }
      if (pic === 27) {
        setInput((prevInput) => ({ ...prevInput, pic28: input.pic28 + 1 }));
      }
      if (pic === 28) {
        setInput((prevInput) => ({ ...prevInput, pic29: input.pic29 + 1 }));
      }
      if (pic === 29) {
        setInput((prevInput) => ({ ...prevInput, pic30: input.pic30 + 1 }));
      }
      if (count == 0) {
        setPic(30);

        // setCount("time out");
      }
    }, [1000]);
  }

  const [pages, setPages] = useState([
    { id: 0, data: <Pic1 />, isChecked: false },
    { id: 1, data: <Pic2 />, isChecked: false },
    { id: 2, data: <Pic3 />, isChecked: false },
    { id: 3, data: <Pic4 />, isChecked: false },
    { id: 4, data: <Pic5 />, isChecked: false },
    { id: 5, data: <Pic6 />, isChecked: false },
    { id: 6, data: <Pic7 />, isChecked: false },
    { id: 7, data: <Pic8 />, isChecked: false },
    { id: 8, data: <Pic9 />, isChecked: false },
    { id: 9, data: <Pic10 />, isChecked: false },
    { id: 10, data: <Pic11 />, isChecked: false },
    { id: 11, data: <Pic12 />, isChecked: false },
    { id: 12, data: <Pic13 />, isChecked: false },
    { id: 13, data: <Pic14 />, isChecked: false },
    { id: 14, data: <Pic15 />, isChecked: false },
    { id: 15, data: <Pic16 />, isChecked: false },
    { id: 16, data: <Pic17 />, isChecked: false },
    { id: 17, data: <Pic18 />, isChecked: false },
    { id: 18, data: <Pic19 />, isChecked: false },
    { id: 19, data: <Pic20 />, isChecked: false },
    { id: 20, data: <Pic21 />, isChecked: false },
    { id: 21, data: <Pic22 />, isChecked: false },
    { id: 22, data: <Pic23 />, isChecked: false },
    { id: 23, data: <Pic24 />, isChecked: false },
    { id: 24, data: <Pic25 />, isChecked: false },
    { id: 25, data: <Pic26 />, isChecked: false },
    { id: 26, data: <Pic27 />, isChecked: false },
    { id: 27, data: <Pic28 />, isChecked: false },
    { id: 28, data: <Pic29 />, isChecked: false },
    { id: 29, data: <Pic30 />, isChecked: false },
    { id: 30, data: <PicEnd scoreData={input.score} />, isChecked: false },
  ]);
  const isChecking = () => {
    const updatedPages = pages.map((page, index) => {
      if (index === pic) {
        return { ...page, isChecked: !page.isChecked };
      }
      return page;
    });

    setPages(updatedPages);
  };

  const [countTo10, setCountTo10] = useState(0);
  const spot = () => {
    if (pic == 30) {
      return;
    }
    setInput((prevInput) => ({
      ...prevInput,
      [`click${pic + 1}`]: input[`click${pic + 1}`] + 1,
    }));
    setInput((prevInput) => ({
      ...prevInput,
      totalClick: input.totalClick + 1,
    }));
    setCountTo10(countTo10 + 1);
    if (countTo10 == 9) {
      handleSkip();
      setCountTo10(0);
    }
  };
  // const spot = (e) => {
  //   let initialWidth = window.innerWidth;
  //   let initialHigh = window.innerHeight;

  //   setW(initialWidth);
  //   setH(initialHigh);
  //   const rect = e.currentTarget.getBoundingClientRect();

  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;

  //   setClickPosition({ x, y, visible: true });
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     totalClick: input.totalClick + 1,
  //   }));

  //   // console.log("clientX: ", e?.clientX);
  //   // console.log("clientY: ", e?.clientY);
  //   // console.log("pageX: ", e?.pageX);
  //   // console.log("pageY: ", e?.pageY);

  //   let isFalse = pages.filter((data) => data.isChecked == false);
  //   let nextFalse = isFalse.filter((data) => data.id >= pic + 1);
  //   if (pic === 0) {
  //     // if (
  //     //   e.clientX > 436 &&
  //     //   e.clientX < 529 &&
  //     //   e.clientY > 541 &&
  //     //   e.clientY < 697
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect1: 1 }));
  //     //   isChecking();
  //     //   alert("CORRECT !!!");
  //     // let isFalse = pages.filter((data) => data.isChecked == false);
  //     // let lastPic = isFalse.length - 2;
  //     // if (lastPic == 0) {
  //     //   return setPic(30);
  //     // }
  //     // if (isFalse[lastPic].id === pic) {
  //     //   setPic(isFalse[0].id);
  //     //   return;
  //     // }
  //     // setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 1186 &&
  //     //   e.clientX < 1281 &&
  //     //   e.clientY > 541 &&
  //     //   e.clientY < 697
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect1: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     // setInput((prevInput) => ({ ...prevInput, click1: input.click1 + 1 }));
  //     // return;
  //   }

  //   if (pic === 1) {
  //     // if (
  //     //   e.clientX > 200 &&
  //     //   e.clientX < 350 &&
  //     //   e.clientY > 131 &&
  //     //   e.clientY < 278
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect2: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     // let isFalse = pages.filter((data) => data.isChecked == false);
  //     // let lastPic = isFalse.length - 2;

  //     // if (lastPic == 0) {
  //     //   return setPic(30);
  //     // }
  //     // if (isFalse[lastPic].id === pic) {
  //     //   console.log("here");
  //     //   setPic(isFalse[0].id);
  //     //   return;
  //     // }
  //     // setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 958 &&
  //     //   e.clientX < 1089 &&
  //     //   e.clientY > 131 &&
  //     //   e.clientY < 278
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect2: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     // setInput((prevInput) => ({ ...prevInput, click2: input.click2 + 1 }));
  //     // return;
  //   }
  //   if (pic == 2) {
  //     // if (
  //     //   e.clientX > 584 &&
  //     //   e.clientX < 696 &&
  //     //   e.clientY > 450 &&
  //     //   e.clientY < 606
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect3: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     // let isFalse = pages.filter((data) => data.isChecked == false);
  //     // let lastPic = isFalse.length - 2;
  //     // if (lastPic == 0) {
  //     //   return setPic(30);
  //     // }
  //     // if (isFalse[lastPic].id === pic) {
  //     //   console.log("here");
  //     //   setPic(isFalse[0].id);
  //     //   return;
  //     // }
  //     // setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 1325 &&
  //     //   e.clientX < 1453 &&
  //     //   e.clientY > 450 &&
  //     //   e.clientY < 606
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect3: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     setInput((prevInput) => ({ ...prevInput, click3: input.click3 + 1 }));
  //     return;
  //   }
  //   if (pic == 3) {
  //     // if (
  //     //   e.clientX > 227 &&
  //     //   e.clientX < 356 &&
  //     //   e.clientY > 168 &&
  //     //   e.clientY < 301
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect4: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     // let isFalse = pages.filter((data) => data.isChecked == false);
  //     // let lastPic = isFalse.length - 2;
  //     // if (lastPic == 0) {
  //     //   return setPic(30);
  //     // }
  //     // if (isFalse[lastPic].id === pic) {
  //     //   console.log("here");
  //     //   setPic(isFalse[0].id);
  //     //   return;
  //     // }
  //     // setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 976 &&
  //     //   e.clientX < 1102 &&
  //     //   e.clientY > 168 &&
  //     //   e.clientY < 301
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect4: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     // setInput((prevInput) => ({ ...prevInput, click4: input.click4 + 1 }));
  //     // return;
  //   }
  //   if (pic == 4) {
  //     // if (
  //     //   e.clientX > 207 &&
  //     //   e.clientX < 296 &&
  //     //   e.clientY > 415 &&
  //     //   e.clientY < 513
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect5: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     // let isFalse = pages.filter((data) => data.isChecked == false);
  //     // let lastPic = isFalse.length - 2;
  //     // if (lastPic == 0) {
  //     //   return setPic(30);
  //     // }
  //     // if (isFalse[lastPic].id === pic) {
  //     //   console.log("here");
  //     //   setPic(isFalse[0].id);
  //     //   return;
  //     // }
  //     // setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 955 &&
  //     //   e.clientX < 1061 &&
  //     //   e.clientY > 415 &&
  //     //   e.clientY < 513
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect5: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     // setInput((prevInput) => ({ ...prevInput, click5: input.click5 + 1 }));
  //     // return;
  //   }

  //   if (pic == 5) {
  //     // if (
  //     //   e.clientX > 251 &&
  //     //   e.clientX < 365 &&
  //     //   e.clientY > 165 &&
  //     //   e.clientY < 271
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect6: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     // let isFalse = pages.filter((data) => data.isChecked == false);
  //     // let lastPic = isFalse.length - 2;
  //     // if (lastPic == 0) {
  //     //   return setPic(30);
  //     // }
  //     // if (isFalse[lastPic].id === pic) {
  //     //   console.log("here");
  //     //   setPic(isFalse[0].id);
  //     //   return;
  //     // }
  //     // setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 1019 &&
  //     //   e.clientX < 1108 &&
  //     //   e.clientY > 165 &&
  //     //   e.clientY < 271
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect6: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     // setInput((prevInput) => ({ ...prevInput, click6: input.click6 + 1 }));
  //     // return;
  //   }
  //   if (pic == 6) {
  //     // if (
  //     //   e.clientX > 540 &&
  //     //   e.clientX < 617 &&
  //     //   e.clientY > 365 &&
  //     //   e.clientY < 446
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect7: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     let isFalse = pages.filter((data) => data.isChecked == false);
  //     let lastPic = isFalse.length - 2;
  //     if (lastPic == 0) {
  //       return setPic(30);
  //     }
  //     if (isFalse[lastPic].id === pic) {
  //       console.log("here");
  //       setPic(isFalse[0].id);
  //       return;
  //     }
  //     setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 1295 &&
  //     //   e.clientX < 1397 &&
  //     //   e.clientY > 365 &&
  //     //   e.clientY < 446
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect7: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     setInput((prevInput) => ({ ...prevInput, click7: input.click7 + 1 }));
  //     return;
  //   }
  //   if (pic == 7) {
  //     // if (
  //     //   e.clientX > 200 &&
  //     //   e.clientX < 307 &&
  //     //   e.clientY > 568 &&
  //     //   e.clientY < 655
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect8: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     let isFalse = pages.filter((data) => data.isChecked == false);
  //     let lastPic = isFalse.length - 2;
  //     if (lastPic == 0) {
  //       return setPic(30);
  //     }
  //     if (isFalse[lastPic].id === pic) {
  //       console.log("here");
  //       setPic(isFalse[0].id);
  //       return;
  //     }
  //     setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 942 &&
  //     //   e.clientX < 1088 &&
  //     //   e.clientY > 568 &&
  //     //   e.clientY < 655
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect8: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     setInput((prevInput) => ({ ...prevInput, click8: input.click8 + 1 }));
  //     return;
  //   }
  //   if (pic == 8) {
  //     // if (
  //     //   e.clientX > 369 &&
  //     //   e.clientX < 490 &&
  //     //   e.clientY > 341 &&
  //     //   e.clientY < 462
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect9: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     let isFalse = pages.filter((data) => data.isChecked == false);
  //     let lastPic = isFalse.length - 2;
  //     if (lastPic == 0) {
  //       return setPic(30);
  //     }
  //     if (isFalse[lastPic].id === pic) {
  //       console.log("here");
  //       setPic(isFalse[0].id);
  //       return;
  //     }
  //     setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 1122 &&
  //     //   e.clientX < 1247 &&
  //     //   e.clientY > 341 &&
  //     //   e.clientY < 462
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect9: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     setInput((prevInput) => ({ ...prevInput, click9: input.click9 + 1 }));
  //     return;
  //   }
  //   if (pic == 9) {
  //     // if (
  //     //   e.clientX > 85 &&
  //     //   e.clientX < 153 &&
  //     //   e.clientY > 208 &&
  //     //   e.clientY < 290
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect10: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     // if (
  //     //   e.clientX > 831 &&
  //     //   e.clientX < 910 &&
  //     //   e.clientY > 208 &&
  //     //   e.clientY < 290
  //     // ) {
  //     //   setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //     //   setInput((prevInput) => ({ ...prevInput, isCorrect10: 1 }));
  //     //   alert("CORRECT !!!");
  //     //   isChecking();
  //     //   let isFalse = pages.filter((data) => data.isChecked == false);
  //     //   let lastPic = isFalse.length - 2;
  //     //   if (lastPic == 0) {
  //     //     return setPic(30);
  //     //   }
  //     //   if (isFalse[lastPic].id === pic) {
  //     //     console.log("here");
  //     //     setPic(isFalse[0].id);
  //     //     return;
  //     //   }
  //     //   setPic(nextFalse[0].id);
  //     // }
  //     setInput((prevInput) => ({ ...prevInput, click10: input.click10 + 1 }));
  //     return;
  //   }

  //   if (pic == 10) {
  //     if (
  //       e.clientX > 490 &&
  //       e.clientX < 576 &&
  //       e.clientY > 346 &&
  //       e.clientY < 433
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect11: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1237 &&
  //       e.clientX < 1324 &&
  //       e.clientY > 346 &&
  //       e.clientY < 433
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect11: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click11: input.click11 + 1 }));
  //     return;
  //   }

  //   if (pic == 11) {
  //     if (
  //       e.clientX > 50 &&
  //       e.clientX < 182 &&
  //       e.clientY > 132 &&
  //       e.clientY < 254
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect12: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 798 &&
  //       e.clientX < 945 &&
  //       e.clientY > 132 &&
  //       e.clientY < 254
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect12: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click12: input.click12 + 1 }));
  //     return;
  //   }
  //   if (pic == 12) {
  //     if (
  //       e.clientX > 381 &&
  //       e.clientX < 464 &&
  //       e.clientY > 79 &&
  //       e.clientY < 166
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect13: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1119 &&
  //       e.clientX < 1229 &&
  //       e.clientY > 79 &&
  //       e.clientY < 166
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect13: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 1;
  //       if (isFalse.length == 2) {
  //         return setPic(10);
  //       }
  //       if (isFalse[lastPic - 1].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click13: input.click13 + 1 }));
  //     return;
  //   }
  //   if (pic == 13) {
  //     if (
  //       e.clientX > 311 &&
  //       e.clientX < 379 &&
  //       e.clientY > 259 &&
  //       e.clientY < 467
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect14: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1065 &&
  //       e.clientX < 1139 &&
  //       e.clientY > 259 &&
  //       e.clientY < 467
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect14: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click14: input.click14 + 1 }));
  //     return;
  //   }
  //   if (pic == 14) {
  //     if (
  //       e.clientX > 188 &&
  //       e.clientX < 277 &&
  //       e.clientY > 420 &&
  //       e.clientY < 516
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect15: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 934 &&
  //       e.clientX < 1034 &&
  //       e.clientY > 420 &&
  //       e.clientY < 516
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect15: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click15: input.click15 + 1 }));
  //     return;
  //   }
  //   if (pic == 15) {
  //     if (
  //       e.clientX > 370 &&
  //       e.clientX < 452 &&
  //       e.clientY > 294 &&
  //       e.clientY < 397
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect16: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1129 &&
  //       e.clientX < 1194 &&
  //       e.clientY > 294 &&
  //       e.clientY < 397
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect16: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click16: input.click16 + 1 }));
  //     return;
  //   }
  //   if (pic == 16) {
  //     if (
  //       e.clientX > 587 &&
  //       e.clientX < 698 &&
  //       e.clientY > 187 &&
  //       e.clientY < 260
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect17: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1351 &&
  //       e.clientX < 1471 &&
  //       e.clientY > 187 &&
  //       e.clientY < 260
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect17: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click17: input.click17 + 1 }));
  //     return;
  //   }
  //   if (pic == 17) {
  //     if (
  //       e.clientX > 498 &&
  //       e.clientX < 588 &&
  //       e.clientY > 391 &&
  //       e.clientY < 485
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect18: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1247 &&
  //       e.clientX < 1342 &&
  //       e.clientY > 391 &&
  //       e.clientY < 485
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect18: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click18: input.click18 + 1 }));
  //     return;
  //   }
  //   if (pic == 18) {
  //     if (
  //       e.clientX > 436 &&
  //       e.clientX < 549 &&
  //       e.clientY > 92 &&
  //       e.clientY < 197
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect19: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1209 &&
  //       e.clientX < 1279 &&
  //       e.clientY > 92 &&
  //       e.clientY < 197
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect19: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click19: input.click19 + 1 }));
  //     return;
  //   }
  //   if (pic == 19) {
  //     if (
  //       e.clientX > 685 &&
  //       e.clientX < 759 &&
  //       e.clientY > 514 &&
  //       e.clientY < 607
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect20: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1427 &&
  //       e.clientX < 1519 &&
  //       e.clientY > 514 &&
  //       e.clientY < 607
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect20: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click20: input.click20 + 1 }));
  //     return;
  //   }
  //   if (pic == 20) {
  //     if (
  //       e.clientX > 15 &&
  //       e.clientX < 136 &&
  //       e.clientY > 218 &&
  //       e.clientY < 323
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect21: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 771 &&
  //       e.clientX < 880 &&
  //       e.clientY > 218 &&
  //       e.clientY < 323
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect21: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click21: input.click21 + 1 }));
  //     return;
  //   }
  //   if (pic == 21) {
  //     if (
  //       e.clientX > 356 &&
  //       e.clientX < 466 &&
  //       e.clientY > 590 &&
  //       e.clientY < 690
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect22: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1109 &&
  //       e.clientX < 1244 &&
  //       e.clientY > 590 &&
  //       e.clientY < 690
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect22: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click22: input.click22 + 1 }));
  //     return;
  //   }
  //   if (pic == 22) {
  //     if (
  //       e.clientX > 196 &&
  //       e.clientX < 298 &&
  //       e.clientY > 451 &&
  //       e.clientY < 544
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect23: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 947 &&
  //       e.clientX < 1041 &&
  //       e.clientY > 451 &&
  //       e.clientY < 544
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect23: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click23: input.click23 + 1 }));
  //     return;
  //   }
  //   if (pic == 23) {
  //     if (
  //       e.clientX > 13 &&
  //       e.clientX < 104 &&
  //       e.clientY > 224 &&
  //       e.clientY < 327
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect24: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 766 &&
  //       e.clientX < 850 &&
  //       e.clientY > 224 &&
  //       e.clientY < 327
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect24: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click24: input.click24 + 1 }));
  //     return;
  //   }
  //   if (pic == 24) {
  //     if (
  //       e.clientX > 109 &&
  //       e.clientX < 205 &&
  //       e.clientY > 357 &&
  //       e.clientY < 444
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect25: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 868 &&
  //       e.clientX < 952 &&
  //       e.clientY > 357 &&
  //       e.clientY < 444
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect25: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click25: input.click25 + 1 }));
  //     return;
  //   }
  //   if (pic == 25) {
  //     if (
  //       e.clientX > 74 &&
  //       e.clientX < 166 &&
  //       e.clientY > 422 &&
  //       e.clientY < 523
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect26: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 826 &&
  //       e.clientX < 917 &&
  //       e.clientY > 422 &&
  //       e.clientY < 523
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect26: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click26: input.click26 + 1 }));
  //     return;
  //   }
  //   if (pic == 26) {
  //     if (
  //       e.clientX > 93 &&
  //       e.clientX < 177 &&
  //       e.clientY > 419 &&
  //       e.clientY < 490
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect27: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 856 &&
  //       e.clientX < 938 &&
  //       e.clientY > 419 &&
  //       e.clientY < 490
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect27: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click27: input.click27 + 1 }));
  //     return;
  //   }
  //   if (pic == 27) {
  //     if (
  //       e.clientX > 382 &&
  //       e.clientX < 461 &&
  //       e.clientY > 481 &&
  //       e.clientY < 580
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect28: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1137 &&
  //       e.clientX < 1212 &&
  //       e.clientY > 481 &&
  //       e.clientY < 580
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect28: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click28: input.click28 + 1 }));
  //     return;
  //   }
  //   if (pic == 28) {
  //     if (
  //       e.clientX > 667 &&
  //       e.clientX < 759 &&
  //       e.clientY > 578 &&
  //       e.clientY < 647
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect29: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();

  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;

  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 1410 &&
  //       e.clientX < 1516 &&
  //       e.clientY > 578 &&
  //       e.clientY < 647
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect29: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click29: input.click29 + 1 }));
  //     return;
  //   }
  //   if (pic == 29) {
  //     if (
  //       e.clientX > 106 &&
  //       e.clientX < 227 &&
  //       e.clientY > 606 &&
  //       e.clientY < 694
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect30: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();
  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     if (
  //       e.clientX > 876 &&
  //       e.clientX < 950 &&
  //       e.clientY > 606 &&
  //       e.clientY < 694
  //     ) {
  //       setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //       setInput((prevInput) => ({ ...prevInput, isCorrect30: 1 }));
  //       alert("CORRECT !!!");
  //       isChecking();

  //       let isFalse = pages.filter((data) => data.isChecked == false);
  //       let lastPic = isFalse.length - 2;
  //       if (lastPic == 0) {
  //         return setPic(30);
  //       }
  //       if (isFalse[lastPic].id === pic) {
  //         console.log("here");
  //         setPic(isFalse[0].id);
  //         return;
  //       }
  //       setPic(nextFalse[0].id);
  //     }
  //     setInput((prevInput) => ({ ...prevInput, click30: input.click30 + 1 }));
  //     return;
  //   }
  //   // if (pic == 30) {
  //   //   if (
  //   //     e.clientX > 474 &&
  //   //     e.clientX < 765 &&
  //   //     e.clientY > 406 &&
  //   //     e.clientY < 693
  //   //   ) {
  //   //     setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //   //     setInput((prevInput) => ({ ...prevInput, isCorrect10: 1 }));
  //   //     alert("CORRECT !!!");
  //   //     isChecking();
  //   //     let isFalse = pages.filter((data) => data.isChecked == false);
  //   //     let lastPic = isFalse.length - 1;
  //   //     if (isFalse.length == 2) {
  //   //       return setPic(10);
  //   //     }
  //   //     if (isFalse[lastPic - 1].id === pic) {
  //   //       console.log("here");
  //   //       setPic(isFalse[0].id);
  //   //       return;
  //   //     }
  //   //     setPic(pic + 1);
  //   //   }
  //   //   if (
  //   //     e.clientX > 1220 &&
  //   //     e.clientX < 1489 &&
  //   //     e.clientY > 406 &&
  //   //     e.clientY < 693
  //   //   ) {
  //   //     setInput((prevInput) => ({ ...prevInput, score: input.score + 1 }));
  //   //     setInput((prevInput) => ({ ...prevInput, isCorrect10: 1 }));
  //   //     alert("CORRECT !!!");
  //   //     isChecking();
  //   //     let isFalse = pages.filter((data) => data.isChecked == false);
  //   //     let lastPic = isFalse.length - 1;
  //   //     if (isFalse.length == 2) {
  //   //       return setPic(10);
  //   //     }
  //   //     if (isFalse[lastPic - 1].id === pic) {
  //   //       console.log("here");
  //   //       setPic(isFalse[0].id);
  //   //       return;
  //   //     }
  //   //     setPic(pic + 1);
  //   //   }
  //   //   setInput((prevInput) => ({ ...prevInput, click10: input.click10 + 1 }));
  //   //   return;
  //   // }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSkip = () => {
    setCountTo10(0);
    setInput((prevInput) => ({
      ...prevInput,
      // totalClick: prevInput.totalClick + 1,
      [`skip${pic + 1}`]: (prevInput[`skip${pic + 1}`] || 0) + 1,
    }));

    setInput((prevInput) => ({
      ...prevInput,
      totalSkip: prevInput.totalSkip + 1,
    }));

    let isFalse = pages.filter((data) => data.isChecked == false);
    let lastPic = isFalse.length - 2;
    let nextFalse = isFalse.filter((data) => data.id >= pic + 1);

    if (isFalse[lastPic]?.id === pic) {
      setPic(isFalse[0].id);
      return;
    }
    setPic(nextFalse[0].id);
  };
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  const [lang, setLang] = useState(`EN`);
  const [isOpenLang, setIsOpenLand] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("LANG")) {
      setLang(localStorage.getItem("LANG"));
    }
  }, []);
  return (
    <div className="">
      {/* <div className="absolute top-0 flex gap-2 ">
        <div className="text-white">{"w"}</div>
        <div className="text-white">{"h"}</div>
        <br />
        <div className="text-white">{"x" + testX}</div>
        <div className="text-white">{"y" + testY}</div>
      </div> */}

  { pic == 30 &&   <div className=" w-full h-[10%] top-0 absolute flex justify-between z-30">
        {pic == 0 ||
          (pic == 30 && (
            <div className="pl-5">
              <img className={`w-[50%] h-[100%] `} src="EVA.svg" alt="" />
            </div>
          ))}
        <div className="pr-5 cursor-pointer text-[2rem]">
          <div onClick={() => setIsOpenLand(true)}>{lang}</div>
          {isOpenLang && (
            <div>
              <div
                onClick={() => {
                  setIsOpenLand(false);
                  localStorage.setItem("LANG", "EN");
                  return setLang("EN");
                }}
              >
                EN
              </div>
              <div
                onClick={() => {
                  setIsOpenLand(false);
                  localStorage.setItem("LANG", "TH");
                  return setLang("TH");
                }}
              >
                TH
              </div>
            </div>
          )}
        </div>
      </div>}
      {isStart ? (
        <div
        // onClick={spot}
          className={`md:w-screen md:h-screen  flex flex-col  gap-5 justify-center items-center  ${
            pic == 30 ? `bg-[url('BG.jpg')] bg-cover bg-center ` : `bg-black`
          } `}
        >
          {pic !== 30 && (
            <div
              className={`flex   items-start xl:justify-center xl:absolute xl:top-0 xl:pt-5 w-full pl-10 gap-10  ${
                pages[30] && pic == 30
                  ? "text-5xl items-center justify-center"
                  : "text-3xl items-start"
              }`}
            >
              <div className="text-red-500 ">
                {lang == "EN"
                  ? `Total Time : ${minutes + "m" + seconds + "s"}`
                  : `เวลาทั้งหมด : ${minutes + " นาที " + seconds + " วินาที"}`}
              </div>
              {/* <div className="text-red-500">Time for each : {countEachPhoto}</div> */}
              <div className="text-green-500">
                {lang == "EN"
                  ? `Scores : ${input.score}`
                  : ` คะเเนน  : ${input.score}`}
              </div>
              {pic !== 30 && (
                <div className="text-green-500">
                  {lang == "EN"
                    ? `Picture : ${pic + 1 + "/30"}`
                    : `รูปภาพ : ${pic + 1 + "/30"}`}
                </div>
              )}
              <div className="text-blue-500">
                {lang == `EN`
                  ? `Total clicks : ${input.totalClick}`
                  : `คลิ๊กทั้งหมด: ${input.totalClick}`}
              </div>
              {/* <div className="text-blue-500">Skips : {countTo10}</div> */}
              {pic !== 30 && (
                <div
                  onClick={handleSkip}
                  className="bg-gray-400 text-xl p-1 rounded-md cursor-pointer"
                >
                  {" "}
                  {lang == "EN" ? "SKIP" : `ข้าม`}
                </div>
              )}
            </div>
          )}
          <div 
           onClick={spot}
          className="flex  w-[1500px] h-[600px] gap-5 relative ">
            <div className={`flex gap-5 w-full items-center  `}>
              {pic == 30 && (
                <div className="flex flex-col gap-5  items-center justify-center w-full h-full text-4xl  ">
                  <div className="bg-white pb-5 bg-opacity-70 w-[40%] rounded-xl flex flex-col gap-2  shadow-xl">
                    <div className="w-full h-[10rem] rounded-t-xl flex items-center justify-center  bg-[#D70321] text-white flex justify-around">
                      <div className="w-[50%]   flex flex-col h-full items-center">
                        <div className="w-full flex justify-center items-end text-7xl h-[70%]  ">
                          {input.score}
                        </div>
                        <div className="w-full flex justify-center text-xl">
                          {lang == `EN` ? `Total 30` : `ทั้งหมด 30 `}
                        </div>
                      </div>
                      <div className="text-8xl flex h-[70%] w-[1%] items-center bg-black bg-white rounded-md"></div>
                      <div className="w-[50%]  flex flex-col h-full">
                        {count > 0 && (
                          <div className="h-[70%]  flex">
                            {" "}
                            {lang == `EN` ? (
                              <div className="w-full flex justify-center text-4xl  items-end">
                                <div> {10 - minutes + "m "}</div>
                                <div className="text-[#D70321]">{" d"}</div>
                                <div>{60 - seconds + "s"}</div>
                              </div>
                            ) : (
                              <div className="w-full flex justify-center text-4xl  items-end">
                                <div> {10 - minutes + "นาที"}</div>
                                <div className="text-[#D70321]">{" d"}</div>
                                <div>{60 - seconds + "วินาที"}</div>
                              </div>
                            )}
                          </div>
                        )}
                        {count < 0 && <div> 10m</div>}
                        <div className="text-xl w-full flex justify-center">
                          {lang == `EN` ? `Used Time ` : `เวลาที่ใช้ไป`}
                        </div>
                      </div>
                    </div>
                    <div className="text-white flex flex-col gap-1 text-2xl pt-5 pb-5">
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {lang == "EN" ? `First Name ` : `ชื่อ`}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.firstName}
                        </div>
                      </div>
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {" "}
                          {lang == "EN" ? `Last Name  ` : `นามสกุล  `}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.lastName}{" "}
                        </div>
                      </div>
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {" "}
                          {lang == `EN` ? ` Total clicks ` : ` คลิ๊กทั้งหมด `}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.totalClick}{" "}
                        </div>
                      </div>
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {" "}
                          {lang == `EN` ? ` Total skips ` : ` ข้ามทั้งหมด `}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.totalSkip}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10 pt-5">
                    <button
                      className="bg-white text-2xl pr-10 pl-10 pt-2 pb-2 rounded-md   shadow-xl"
                      onClick={() => {
                        if (pic === 30) {
                          setPic(0);
                          setInput({
                            ...input,
                            firstName: "",
                            lastName: "",
                            totalClick: 0,
                            score: 0,
                            time: 0,
                            pic1: 0,
                            pic2: 0,
                            pic3: 0,
                            pic4: 0,
                            pic5: 0,
                            pic6: 0,
                            pic7: 0,
                            pic8: 0,
                            pic9: 0,
                            pic10: 0,

                            pic11: 0,
                            pic12: 0,
                            pic13: 0,
                            pic14: 0,
                            pic15: 0,
                            pic16: 0,
                            pic17: 0,
                            pic18: 0,
                            pic19: 0,
                            pic20: 0,

                            pic21: 0,
                            pic22: 0,
                            pic23: 0,
                            pic24: 0,
                            pic25: 0,
                            pic26: 0,
                            pic27: 0,
                            pic28: 0,
                            pic29: 0,
                            pic30: 0,

                            click1: 0,
                            click2: 0,
                            click3: 0,
                            click4: 0,
                            click5: 0,
                            click6: 0,
                            click7: 0,
                            click8: 0,
                            click9: 0,
                            click10: 0,

                            click11: 0,
                            click12: 0,
                            click13: 0,
                            click14: 0,
                            click15: 0,
                            click16: 0,
                            click17: 0,
                            click18: 0,
                            click19: 0,
                            click20: 0,

                            click21: 0,
                            click22: 0,
                            click23: 0,
                            click24: 0,
                            click25: 0,
                            click26: 0,
                            click27: 0,
                            click28: 0,
                            click29: 0,
                            click30: 0,

                            skip1: 0,
                            skip2: 0,
                            skip3: 0,
                            skip4: 0,
                            skip5: 0,
                            skip6: 0,
                            skip7: 0,
                            skip8: 0,
                            skip9: 0,
                            skip10: 0,

                            skip11: 0,
                            skip12: 0,
                            skip13: 0,
                            skip14: 0,
                            skip15: 0,
                            skip16: 0,
                            skip17: 0,
                            skip18: 0,
                            skip19: 0,
                            skip20: 0,

                            skip21: 0,
                            skip22: 0,
                            skip23: 0,
                            skip24: 0,
                            skip25: 0,
                            skip26: 0,
                            skip27: 0,
                            skip28: 0,
                            skip29: 0,
                            skip30: 0,

                            isCorrect1: 0,
                            isCorrect2: 0,
                            isCorrect3: 0,
                            isCorrect4: 0,
                            isCorrect5: 0,
                            isCorrect6: 0,
                            isCorrect7: 0,
                            isCorrect8: 0,
                            isCorrect9: 0,
                            isCorrect10: 0,

                            isCorrect11: 0,
                            isCorrect12: 0,
                            isCorrect13: 0,
                            isCorrect14: 0,
                            isCorrect15: 0,
                            isCorrect16: 0,
                            isCorrect17: 0,
                            isCorrect18: 0,
                            isCorrect19: 0,
                            isCorrect20: 0,

                            isCorrect21: 0,
                            isCorrect22: 0,
                            isCorrect23: 0,
                            isCorrect24: 0,
                            isCorrect25: 0,
                            isCorrect26: 0,
                            isCorrect27: 0,
                            isCorrect28: 0,
                            isCorrect29: 0,
                            isCorrect30: 0,
                          });
                          setCountTo10(0);
                          setCount(600);
                          setIsStart(false);
                          setPages(
                            pages.map((page) => {
                              if (page.isChecked) {
                                return { ...page, isChecked: false }; // Update isChecked to false
                              }
                              return page; // Return the original object if no change
                            })
                          );
                        }
                      }}
                    >
                      {lang == `EN` ? `  Try again` : `ลองอีกครั้ง`}
                    </button>
                    <button
                      onClick={() => (window.location = "/")}
                      className="bg-[#D70321] text-2xl pr-10 pl-10 pt-2 pb-2  rounded-md text-white shadow-xl"
                    >
                      {lang == `EN` ? `Back To Home` : `กลับไปหน้าโฮม`}
                    </button>
                  </div>
                </div>
              )}

              {pic === pages[pic]?.id &&
                pages[pic]?.isChecked === false &&
                pages[pic]?.data}
              {/* {pic === pages[pic].id &&  pages[pic].data} */}
            </div>
     
            {pic !== 30 && (
              <div className="h-full w-full bg-red-20 absolute top-0 left-0 opacity-60">
                <div className="w-[100%] h-[100%] bg-yellw-500 ">
                  <div
                    onClick={() => {
                      setCountTo10(0);
                      setInput((prevInput) => ({
                        ...prevInput,
                        score: input.score + 1,
                      }));
                      setInput((prevInput) => ({
                        ...prevInput,
                        [`isCorrect${pic + 1}`]: 1,
                      }));
                      isChecking();
                      // alert("CORRECT !!!");
                      let isFalse = pages.filter(
                        (data) => data.isChecked == false
                      );
                      let lastPic = isFalse.length - 2;
                      if (lastPic == 0) {
                        return setPic(30);
                      }
                      if (isFalse[lastPic].id === pic) {
                        setPic(isFalse[0].id);
                        return;
                      }
                      let nextFalse = isFalse.filter(
                        (data) => data.id >= pic + 1
                      );
                      setPic(nextFalse[0].id);
                    }}
                    className={`absolute rounded-full  w-[70px] h-[70px] `}
                    style={{
                      // top: 510,
                      // left: 460,
                      top: pageY1,
                      left: pageX1,
                      transform: "translate(-50%, -50%)", // Center the location indicator
                    }}
                  ></div>
                  <div
                    onClick={() => {
                      setCountTo10(0);
                      setInput((prevInput) => ({
                        ...prevInput,
                        score: input.score + 1,
                      }));
                      setInput((prevInput) => ({
                        ...prevInput,
                        [`isCorrect${pic + 1}`]: 1,
                      }));
                      isChecking();
                      // alert("CORRECT !!!");
                      let isFalse = pages.filter(
                        (data) => data.isChecked == false
                      );
                      let lastPic = isFalse.length - 2;
                      if (lastPic == 0) {
                        return setPic(30);
                      }
                      if (isFalse[lastPic].id === pic) {
                        setPic(isFalse[0].id);
                        return;
                      }
                      let nextFalse = isFalse.filter(
                        (data) => data.id >= pic + 1
                      );
                      setPic(nextFalse[0].id);
                    }}
                    className={`absolute rounded-full  w-[70px] h-[70px] `}
                    style={{
                      top: pageY2,
                      left: pageX2,
                      // top: 510,
                      // left: 1215,
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                </div>
                <div className="w-full h-[10%] absolute bottom-0  flex justify-center items-center"></div>
              </div>
            )}
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
      ) : (
        <div onChange={handleChange}>
          <Start setIsStart={setIsStart} />
        </div>
      )}
    </div>
  );
}
