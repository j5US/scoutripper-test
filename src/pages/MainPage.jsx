import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiCloseFill } from "react-icons/ri";
import { LuExpand } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Logo from "../assets/wordlogo.svg";
import Close from "../assets/close.svg";
// import Height from "../assets/height.svg";
// import Weight from "../assets/weight.svg";
import Weight from "../ui/Weight"
import Height from "../ui/Height"
import Info from "../assets/info.svg";
import Link from "../assets/link.svg";
import MotionElement from "../components/MotionElement";
import LoaderScoutripper from "../ui/LoaderScoutripper";
import DarkModeToggle from "../components/DarkModeToggle";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDarkMode } from "../context/DarkModeContext";
import LightLogo from "../assets/Scoutripper-Logo.png"
import DarkLogo from "../assets/Scoutripper-Logo-White.png"

const getDifficultySVG = (grade, small) => {
  switch (grade) {
    case "1":
      return (
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height={small ? "30" : "50"}
            viewBox="0 0 67 50"
            fill="none"
          >
            <g clipPath="url(#clip0_148_375)">
              <rect width="66.6667" height="50" fill="none"></rect>
              <path
                d="M13.1405 31.768L35.8883 39.1392C38.146 40.4053 38.9459 43.2799 37.6799 45.5374C36.4139 47.795 33.5393 48.595 31.2817 47.329L13.1396 31.7666L13.1405 31.768Z"
                fill="var(--grade-pointer)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2283 27.3841C10.9694 28.749 10.8333 30.1605 10.8333 31.6076C10.8333 36.5086 12.3955 41.0324 15.0498 44.7245L8.28354 49.5889C4.64422 44.5267 2.5 38.3114 2.5 31.6076C2.5 29.6367 2.68545 27.7054 3.04099 25.8311L11.2283 27.3841Z"
                fill="#A3F3A5"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.923 9.15103C24.0562 9.63615 17.2712 14.169 13.6416 20.7122C12.9631 21.9353 12.3958 23.2276 11.9528 24.5754L4.03613 21.9733C4.64489 20.1212 5.42395 18.3472 6.35438 16.6699C11.3149 7.72741 20.6034 1.49991 31.4101 0.833496L31.923 9.15103Z"
                fill="var(--grade-empty)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.4387 27.3841C55.6976 28.749 55.8337 30.1605 55.8337 31.6076C55.8337 36.5086 54.2715 41.0324 51.6172 44.7245L58.3835 49.5889C62.0228 44.5267 64.167 38.3114 64.167 31.6076C64.167 29.6367 63.9815 27.7054 63.626 25.8311L55.4387 27.3841Z"
                fill="var(--grade-empty)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.744 9.15103C42.6108 9.63615 49.3958 14.169 53.0254 20.7122C53.7039 21.9353 54.2712 23.2276 54.7142 24.5754L62.6309 21.9733C62.0221 20.1212 61.243 18.3472 60.3126 16.6699C55.3521 7.72741 46.0635 1.49991 35.2569 0.833496L34.744 9.15103Z"
                fill="var(--grade-empty)"
              ></path>
              <path
                d="M36.6484 14.9092V26.9092H33.7539V17.6162H33.6836L31 19.2568V16.749L33.959 14.9092H36.6484Z"
                fill="var(--grade-point)"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_148_375">
                <rect width="66.6667" height="50" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <p className="text-grade-pointer">Easy</p>
        </div>
      );
    case "2":
      return (
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height={small ? "30" : "50"}
            viewBox="0 0 67 50"
            fill="none"
          >
            <rect width="66.6667" height="50" fill="none"></rect>
            <path
              d="M21.167 19.5424L39.0625 39.8941C40.5292 42.4347 39.6443 45.6985 37.1038 47.1651C34.5633 48.6317 31.2994 47.7469 29.8328 45.2064L21.167 19.5405V19.5424Z"
              fill="var(--grade-pointer)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2283 27.3841C10.9694 28.749 10.8333 30.1605 10.8333 31.6076C10.8333 36.5086 12.3955 41.0324 15.0498 44.7245L8.28354 49.5889C4.64422 44.5267 2.5 38.3114 2.5 31.6076C2.5 29.6367 2.68545 27.7054 3.04099 25.8311L11.2283 27.3841Z"
              fill="#F9F871"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.923 9.15103C24.0562 9.63615 17.2712 14.169 13.6416 20.7122C12.9631 21.9353 12.3958 23.2276 11.9528 24.5754L4.03613 21.9733C4.64489 20.1212 5.42395 18.3472 6.35438 16.6699C11.3149 7.72741 20.6034 1.49991 31.4101 0.833496L31.923 9.15103Z"
              fill="#F9F871"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.4387 27.3841C55.6976 28.749 55.8337 30.1605 55.8337 31.6076C55.8337 36.5086 54.2715 41.0324 51.6172 44.7245L58.3835 49.5889C62.0228 44.5267 64.167 38.3114 64.167 31.6076C64.167 29.6367 63.9815 27.7054 63.626 25.8311L55.4387 27.3841Z"
              fill="var(--grade-empty)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.744 9.15103C42.6108 9.63615 49.3958 14.169 53.0254 20.7122C53.7039 21.9353 54.2712 23.2276 54.7142 24.5754L62.6309 21.9733C62.0221 20.1212 61.243 18.3472 60.3126 16.6699C55.3521 7.72741 46.0635 1.49991 35.2569 0.833496L34.744 9.15103Z"
              fill="var(--grade-empty)"
            ></path>
            <path
              d="M29.1734 26.7305V24.6727L33.4913 20.8923C33.815 20.5994 34.0906 20.3316 34.3179 20.0889C34.5453 19.8422 34.7187 19.5956 34.8382 19.349C34.9576 19.0985 35.0173 18.8268 35.0173 18.5339C35.0173 18.2064 34.9461 17.927 34.8035 17.6958C34.6609 17.4607 34.4644 17.2796 34.2139 17.1524C33.9634 17.0253 33.6763 16.9617 33.3526 16.9617C33.025 16.9617 32.738 17.0291 32.4913 17.164C32.2447 17.295 32.052 17.4858 31.9133 17.7362C31.7784 17.9867 31.711 18.2912 31.711 18.6495H29C29 17.8441 29.1811 17.1486 29.5434 16.5628C29.9056 15.9771 30.4143 15.5262 31.0694 15.2102C31.7283 14.8904 32.4933 14.7305 33.3642 14.7305C34.262 14.7305 35.0424 14.8808 35.7052 15.1813C36.368 15.4819 36.8805 15.902 37.2428 16.4415C37.6089 16.9771 37.7919 17.5994 37.7919 18.3085C37.7919 18.7594 37.7013 19.2064 37.5202 19.6495C37.3391 20.0927 37.0135 20.5821 36.5434 21.1178C36.0771 21.6534 35.4143 22.295 34.5549 23.0426L33.1387 24.349V24.4241H37.9364V26.7305H29.1734Z"
              fill="var(--grade-point)"
            ></path>
          </svg>
          <p className="text-grade-pointer">Moderate</p>
        </div>
      );
    case "3":
      return (
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height={small ? "30" : "50"}
            viewBox="0 0 67 50"
            fill="none"
          >
            <rect width="66.6667" height="50" fill="none"></rect>
            <path
              d="M45.5 19.5424L27.6045 39.8941C26.1378 42.4347 27.0227 45.6985 29.5632 47.1651C32.1037 48.6317 35.3676 47.7469 36.8342 45.2064L45.5 19.5405V19.5424Z"
              fill="var(--grade-pointer)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.4387 27.3841C55.6976 28.749 55.8337 30.1605 55.8337 31.6076C55.8337 36.5086 54.2715 41.0324 51.6172 44.7245L58.3835 49.5889C62.0228 44.5267 64.167 38.3114 64.167 31.6076C64.167 29.6367 63.9815 27.7054 63.626 25.8311L55.4387 27.3841Z"
              fill="var(--grade-empty)"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.744 9.15103C42.6108 9.63615 49.3958 14.169 53.0254 20.7122C53.7039 21.9353 54.2712 23.2276 54.7142 24.5754L62.6309 21.9733C62.0221 20.1212 61.243 18.3472 60.3126 16.6699C55.3521 7.72741 46.0635 1.49991 35.2569 0.833496L34.744 9.15103Z"
              fill="#F87D3A"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2283 27.3841C10.9694 28.749 10.8333 30.1605 10.8333 31.6076C10.8333 36.5086 12.3955 41.0324 15.0498 44.7245L8.28354 49.5889C4.64422 44.5267 2.5 38.3114 2.5 31.6076C2.5 29.6367 2.68545 27.7054 3.04099 25.8311L11.2283 27.3841Z"
              fill="#F87D3A"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.923 9.15103C24.0562 9.63615 17.2712 14.169 13.6416 20.7122C12.9631 21.9353 12.3958 23.2276 11.9528 24.5754L4.03613 21.9733C4.64489 20.1212 5.42395 18.3472 6.35438 16.6699C11.3149 7.72741 20.6034 1.49991 31.4101 0.833496L31.923 9.15103Z"
              fill="#F87D3A"
            ></path>
            <path
              d="M33.5913 26.7305C32.7015 26.7305 31.9125 26.5784 31.2243 26.2742C30.5399 25.9662 30 25.5423 29.6046 25.0023C29.2091 24.4624 29.0076 23.8407 29 23.1373H31.8403C31.8517 23.3921 31.9335 23.6183 32.0856 23.816C32.2376 24.0099 32.4449 24.162 32.7072 24.2723C32.9696 24.3826 33.2681 24.4377 33.6027 24.4377C33.9373 24.4377 34.2319 24.3788 34.4867 24.2609C34.7452 24.1392 34.9468 23.9738 35.0913 23.7647C35.2357 23.5518 35.3061 23.3084 35.3023 23.0347C35.3061 22.7609 35.2281 22.5175 35.0684 22.3046C34.9087 22.0917 34.6825 21.9263 34.3897 21.8084C34.1008 21.6905 33.7586 21.6316 33.3631 21.6316H32.2281V19.624H33.3631C33.7091 19.624 34.0133 19.567 34.2757 19.4529C34.5418 19.3388 34.749 19.1791 34.8973 18.9738C35.0456 18.7647 35.1179 18.5251 35.1141 18.2552C35.1179 17.9928 35.0551 17.7628 34.9259 17.5651C34.8004 17.3635 34.6236 17.2077 34.3954 17.0974C34.1711 16.9871 33.9106 16.932 33.6141 16.932C33.3023 16.932 33.019 16.9871 32.7643 17.0974C32.5133 17.2077 32.3137 17.3635 32.1654 17.5651C32.0171 17.7666 31.9392 18.0004 31.9316 18.2666H29.2338C29.2414 17.5708 29.4354 16.9586 29.8156 16.4301C30.1958 15.8978 30.7129 15.4814 31.3669 15.181C32.0247 14.8807 32.7738 14.7305 33.6141 14.7305C34.4506 14.7305 35.1863 14.8769 35.8213 15.1696C36.4563 15.4624 36.9506 15.8616 37.3042 16.3674C37.6578 16.8693 37.8346 17.4377 37.8346 18.0727C37.8384 18.7305 37.6236 19.2723 37.1901 19.6981C36.7605 20.124 36.2072 20.3864 35.5304 20.4852V20.5765C36.4354 20.6829 37.1179 20.9757 37.5779 21.4548C38.0418 21.9339 38.2719 22.5327 38.2681 23.2514C38.2681 23.9282 38.0684 24.5289 37.6692 25.0537C37.2738 25.5746 36.7224 25.9852 36.0152 26.2856C35.3118 26.5822 34.5038 26.7305 33.5913 26.7305Z"
              fill="var(--grade-point)"
            ></path>
          </svg>
          <p className="text-grade-pointer">Hard</p>
        </div>
      );
    case "None":
      return (
        <div className="flex flex-col justify-center items-center gap-2">
          <svg
            width="61"
            height="52"
            viewBox="0 0 61 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5117 14.7797L34.2571 28.1373C35.2198 29.8047 34.639 31.9469 32.9716 32.9095C31.3042 33.872 29.1619 33.2913 28.1994 31.6239L22.5117 14.7784V14.7797Z"
              fill="var(--img-fill-in)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9904 19.9263C15.8205 20.8221 15.7312 21.7485 15.7312 22.6983C15.7312 25.915 16.7565 28.8841 18.4986 31.3074L14.0576 34.5001C11.669 31.1775 10.2617 27.0982 10.2617 22.6983C10.2617 21.4047 10.3834 20.1371 10.6168 18.9069L15.9904 19.9263Z"
              fill="var(--img-fill-in)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.5726 7.95904C24.4093 8.27745 19.9561 11.2525 17.5739 15.5471C17.1286 16.3499 16.7563 17.198 16.4655 18.0826L11.2695 16.3748C11.6691 15.1592 12.1804 13.9948 12.7911 12.8939C16.0468 7.02467 22.1432 2.93733 29.2359 2.49994L29.5726 7.95904Z"
              fill="var(--img-fill-in)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.0057 19.9263C45.1756 20.8221 45.2649 21.7485 45.2649 22.6983C45.2649 25.915 44.2396 28.8841 42.4975 31.3074L46.9384 34.5001C49.3271 31.1775 50.7344 27.0982 50.7344 22.6983C50.7344 21.4047 50.6127 20.1371 50.3793 18.9069L45.0057 19.9263Z"
              fill="var(--img-fill-in)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.4196 7.95904C36.5829 8.27745 41.0361 11.2525 43.4183 15.5471C43.8636 16.3499 44.2359 17.198 44.5267 18.0826L49.7227 16.3748C49.3231 15.1592 48.8118 13.9948 48.2011 12.8939C44.9454 7.02467 38.849 2.93733 31.7562 2.49994L31.4196 7.95904Z"
              fill="var(--img-fill-in)"
            />
            <rect
              x="10.5"
              y="41.5001"
              width="40"
              height="8"
              rx="4"
              fill="var(--img-fill-in)"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const CompareCard = ({ name, image, state, difficulty }) => {
  return (
    <div className="flex flex-row gap-3 w-fit border p-4 rounded-md border-calc-bound bg-setting-calc shadow-xs">
      {image === "None" ? (
        <div className="w-screen max-w-16 h-16 bg-img-fill-in rounded-sm" />
      ) : (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-sm"
        />
      )}
      <div className="min-w-[100px] sm:min-w-[160px] flex flex-col justify-center items-start w-full">
        {name === "None" ? (
          <div className="w-screen max-w-24 sm:max-w-32 h-3.5 bg-img-fill-in rounded-sm mb-2" />
        ) : (
          <p className="text-sm sm:text-base font-semibold text-accent-trek text-nowrap">
            {name}
          </p>
        )}
        <div className="flex flex-row gap-1 items-center">
          {state === "None" ? (
            <div className="w-screen max-w-16 h-3.5 bg-img-fill-in rounded-sm" />
          ) : (
            <p className="text-xs sm:text-sm text-accent-secondary text-nowrap">
              {state}
            </p>
          )}
        </div>
      </div>
      <div className="border-r my-1 px-2 border-accent-secondary/50"></div>
      {getDifficultySVG(difficulty, true)}
    </div>
  );
};

const MainPage = () => {
  const { isDarkMode } = useDarkMode();
  const logo = isDarkMode ? DarkLogo : LightLogo;

  const isMobile = window.innerWidth < 768;

  const [unit, setUnit] = useState("metric");
  const [heightMetric, setHeightMetric] = useState(0);
  const [heightImperialFeet, setHeightImperialFeet] = useState(0);
  const [heightImperialInches, setHeightImperialInches] = useState(0);
  const [weight, setWeight] = useState(0);
  const [weightImperial, setWeightImperial] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const [allSuggestions, setAllSuggestions] = useState([]);
  const [filteredByBmi, setFilteredByBmi] = useState([]);

  const [showTips, setShowTips] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 24.9) {
      return "Normal weight";
    } else if (bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  useEffect(() => {
    if (unit === "metric") {
      setHeightImperialFeet(0);
      setHeightImperialInches(0);
      setWeightImperial(0);
      setBmiCategory("");
    } else {
      setHeightMetric(0);
      setWeight(0);
      setBmiCategory("");
    }
  }, [unit]);

  useEffect(() => {
    if (unit === "metric") {
      setBmi(weight / (heightMetric / 100) ** 2);
    } else {
      setBmi(
        (weightImperial * 0.453592) /
        (heightImperialFeet * 0.3048 + heightImperialInches * 0.0254) ** 2
      );
    }

    setBmiCategory(getBmiCategory(bmi));
  }, [
    heightMetric,
    heightImperialFeet,
    heightImperialInches,
    weight,
    weightImperial,
  ]);

  useEffect(() => {
    if (bmi < 18.5 && bmi > 0) {
      setBmiCategory("Underweight");
      setBmiMessage("May indicate nutritional deficiency");
      setFilteredByBmi(
        allSuggestions.filter((suggestion) => suggestion.grade === "1")
      );
    } else if (bmi < 24.9 && bmi > 0) {
      setBmiCategory("Normal weight");
      setBmiMessage("Generally considered healthy");
      setFilteredByBmi(
        allSuggestions.filter(
          (suggestion) => suggestion.grade === "3" || suggestion.grade === "4"
        )
      );
    } else if (bmi < 29.9 && bmi > 0) {
      setBmiCategory("Overweight");
      setBmiMessage("May lead to health issues");
      setFilteredByBmi(
        allSuggestions.filter(
          (suggestion) => suggestion.grade === "1" || suggestion.grade === "2"
        )
      );
    } else if (bmi > 0) {
      setBmiCategory("Obese");
      setBmiMessage("Increased risk for several health conditions");
      setFilteredByBmi(
        allSuggestions.filter((suggestion) => suggestion.grade === "1")
      );
    } else {
      setBmiCategory("");
      setBmiMessage("");
      setFilteredByBmi([]);
    }
  }, [bmi]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          `https://scoutripper.com/api/search_track?limit=500`
        );
        setAllSuggestions(response.data.data || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchLocations();
    }, 300); // Debounce API calls

    return () => clearTimeout(delayDebounceFn);
  }, []);

  if (allSuggestions.length === 0) return <LoaderScoutripper />

  return (
    <div className="min-h-screen">
      <div>
        <div className="stepper font-medium w-full min-h-screen flex flex-col justify-between items-center px-4">
          {!isMobile && <Header link={"https://www.scoutripper.com/"} />}
          {isMobile && (
            <div className="w-screen flex items-center justify-between flex-row pt-4 px-4">
              <img src={logo} alt="Logo" className="h-10" />
              <span className="flex items-center gap-4">
                <DarkModeToggle />
                <a href={"https://www.scoutripper.com/"} target="_self">
                  <img src={Close} alt="Close" className="h-3 cursor-pointer" />
                </a>
              </span>
            </div>
          )}
          <div className="max-w-4xl w-full flex flex-col justify-center items-center flex-grow">
            <MotionElement component="h1" delay={0.4} className="font-bold text-2xl sm:text-3xl text-header-main pt-5 pb-2 text-start sm:text-center">
              Check Your BMI & Find the Perfect Trek for You!
            </MotionElement>
            <MotionElement component="h3" delay={0.45} className="font-normal text-base text-accent-secondary pb-4 sm:pb-10 text-start sm:text-center">
              Explain what BMI is and why it matters for trekking.
            </MotionElement>
            <MotionElement component="div" delay={0.5} className="bg-setting-calc w-full flex flex-col sm:flex-row justify-center items-center border border-calc-bound rounded-md my-4">
              <div className="w-full sm:w-[55%] flex flex-col justify-center items-center p-6">
                <div className="w-full flex flex-row justify-center items-center bg-footer-main/9 rounded-md p-2 mb-5">
                  <div
                    className={`cursor-pointer w-full h-8 bg-primary-main font-semibold text-sm rounded-md flex justify-center items-center ${unit === "metric"
                      ? "bg-footer-main text-white"
                      : "text-accent-secondary"
                      }`}
                    onClick={() => setUnit("metric")}
                  >
                    Metric
                  </div>
                  <div
                    className={`cursor-pointer w-full h-8 bg-primary-main font-semibold text-sm rounded-md flex justify-center items-center ${unit === "imperial"
                      ? "bg-footer-main text-white"
                      : "text-accent-secondary"
                      }`}
                    onClick={() => setUnit("imperial")}
                  >
                    Imperial
                  </div>
                </div>
                {unit === "metric" && (
                  <div className="w-full flex flex-col justify-center items-center mt-4 gap-5">
                    <div className="w-full flex flex-col justify-center items-center gap-3.5">
                      <div className="w-full font-semibold text-sm text-primary-main flex flex-row justify-start items-center gap-2">
                        <div className="bg-footer-main/20 rounded-full p-[2px]">
                          {/* <img src={Height} alt="Height" className="h-5" /> */}
                          <Height className="h-5 text-accent-svg" />
                        </div>
                        <span className="text-accent-primary">Height</span>
                      </div>
                      <div className="w-full flex flex-row justify-between items-center gap-2">
                        <input
                          type="number"
                          className="w-[92%] h-10 text-start text-base font-semibold text-header-main px-3 border border-input-bound rounded-md focus:outline-none focus:border-[#838687]"
                          value={heightMetric}
                          onChange={(e) => setHeightMetric(e.target.value)}
                        />
                        <div className="font-medium text-sm text-accent-secondary">
                          cm
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-3.5">
                      <div className="w-full font-semibold text-sm text-primary-main flex flex-row justify-start items-center gap-2">
                        <div className="bg-footer-main/20 rounded-full p-[2px]">
                          {/* <img src={Weight} alt="Weight" className="h-5" /> */}
                          <Weight className="h-5 text-accent-svg" />
                        </div>
                        <span className="text-accent-primary">Weight</span>
                      </div>
                      <div className="w-full flex flex-row justify-between items-center gap-2">
                        <input
                          type="number"
                          className="w-[92%] h-10 text-start text-base font-semibold text-header-main px-3 border border-input-bound rounded-md focus:outline-none focus:border-[#838687]"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                        <div className="font-medium text-sm text-accent-secondary">
                          kg
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {unit === "imperial" && (
                  <div className="w-full flex flex-col justify-center items-center mt-4 gap-5">
                    <div className="w-full flex flex-col justify-center items-center gap-3.5">
                      <div className="w-full font-semibold text-sm text-primary-main flex flex-row justify-start items-center gap-2">
                        <div className="bg-footer-main/20 rounded-full p-[2px]">
                          {/* <img src={Height} alt="Height" className="h-5" /> */}
                          <Height className="h-5 text-accent-svg" />
                        </div>
                        Height
                      </div>
                      <div className="w-full flex flex-row justify-between items-center">
                        <div className="w-full flex flex-row justify-between items-center">
                          <input
                            type="number"
                            className="w-[84%] h-10 text-start text-base font-semibold text-header-main px-3 border border-input-bound rounded-md focus:outline-none focus:border-[#838687]"
                            value={heightImperialFeet}
                            onChange={(e) =>
                              setHeightImperialFeet(e.target.value)
                            }
                          />
                          <div className="w-[16%] text-center font-medium text-sm text-accent-secondary">
                            ft
                          </div>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                          <input
                            type="number"
                            className="w-[84%] h-10 text-start text-base font-semibold text-header-main px-3 border border-input-bound rounded-md focus:outline-none focus:border-[#838687]"
                            value={heightImperialInches}
                            onChange={(e) =>
                              setHeightImperialInches(e.target.value)
                            }
                          />
                          <div className="w-[16%] text-end font-medium text-sm text-accent-secondary">
                            in
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-3.5">
                      <div className="w-full font-semibold text-sm text-primary-main flex flex-row justify-start items-center gap-2">
                        <div className="bg-footer-main/20 rounded-full p-[2px]">
                          {/* <img src={Weight} alt="Weight" className="h-5" /> */}
                          <Weight className="h-5 text-accent-svg" />
                        </div>
                        Weight
                      </div>
                      <div className="w-full flex flex-row justify-between items-center gap-2">
                        <input
                          type="number"
                          className="w-[92%] h-10 text-start text-base font-semibold text-header-main px-3 border border-input-bound rounded-md focus:outline-none focus:border-[#838687]"
                          value={weightImperial}
                          onChange={(e) => setWeightImperial(e.target.value)}
                        />
                        <div className="font-medium text-sm text-accent-secondary">
                          lbs
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-[95%] sm:w-[45%] flex flex-col justify-center items-center gap-1 p-6 border-t sm:border-l sm:border-t-0 border-calc-divider pt-10 pb-4 sm:pt-0 sm:pb-0 sm:py-3 px-2 sm:px-6">
                <div className="w-full flex flex-row justify-center items-center gap-2">
                  <p className="text-xs font-semibold text-header-main">
                    Your BMI is
                  </p>
                  <div className="p-[2px]">
                    {/* <img src={Info} alt="Info" className="h-3.5 text-accent-secondary" /> */}
                    <AiOutlineInfoCircle className="text-[15px] text-accent-secondary" />
                  </div>
                </div>
                <div
                  className={`w-full flex flex-row justify-center items-center gap-2 ${bmiCategory === "Underweight"
                    ? "text-[#3B86ED]"
                    : bmiCategory === "Normal weight"
                      ? "text-[#28BF70]"
                      : bmiCategory === "Overweight"
                        ? "text-[#F7C636]"
                        : bmiCategory === "Obese"
                          ? "text-[#EB4846]"
                          : "text-header-main"
                    }`}
                >
                  <p className="text-4xl font-bold text-primary-main">
                    {bmi ? bmi.toFixed(1) : "-"}
                  </p>
                  {bmiCategory && (
                    <p className="text-base font-semibold">({bmiCategory})</p>
                  )}
                </div>
                <div>
                  <p className="text-sm font-normal text-header-main">
                    {bmiMessage}
                  </p>
                </div>
                <div
                  className="mt-8 w-full h-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #3B86ED, #28BF70, #F7C636, #EB4846)",
                  }}
                ></div>
                <div className="w-full flex flex-row justify-between items-center mt-[2px]">
                  <p className="text-xs font-normal text-accent-secondary">15</p>
                  <p className="text-xs font-normal text-accent-secondary">25</p>
                  <p className="text-xs font-normal text-accent-secondary">30</p>
                  <p className="text-xs font-normal text-accent-secondary">40+</p>
                </div>
                <div className="mt-4 w-full flex flex-row justify-between items-center gap-3.5">
                  <div
                    className="w-full flex flex-row justify-center gap-2 items-center bg-setting-primary py-3 sm:py-2 p-2 rounded-sm cursor-pointer"
                    onClick={() => setShowTips(true)}
                  >
                    <p className="text-xs sm:text-sm font-medium text-accent-secondary">Tips</p>
                    <LuExpand className="text-accent-secondary h-3" />
                  </div>
                  <div
                    className="w-full flex flex-row justify-center gap-2 items-center bg-setting-primary py-3 sm:py-2 p-2 rounded-sm cursor-pointer"
                    onClick={() => setShowDetails(true)}
                  >
                    <p className="text-xs sm:text-sm font-medium text-accent-secondary">
                      Show more details
                    </p>
                    <LuExpand className="text-accent-secondary h-3" />
                  </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-4 gap-3">
                  <p className="text-[11px] font-normal text-accent-secondary">
                    This calculator is for informational purposes only.
                  </p>
                </div>
              </div>
            </MotionElement>
            <MotionElement component="div" delay={0.55} className="w-full flex flex-col justify-center items-center my-6 gap-6">
              <div className="font-medium text-base text-accent-secondary text-center">
                Calculate BMI to view trek suggestions:
              </div>
              {allSuggestions.length > 0 && (
                <>
                  <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6">
                    <CompareCard
                      name={filteredByBmi[0] ? filteredByBmi[0].title : "None"}
                      image={
                        filteredByBmi[0] ? filteredByBmi[0].image_url : "None"
                      }
                      state={
                        filteredByBmi[0]
                          ? filteredByBmi[0].locationName
                          : "None"
                      }
                      difficulty={
                        filteredByBmi[0] ? filteredByBmi[0].grade : "None"
                      }
                    />
                    <CompareCard
                      name={filteredByBmi[1] ? filteredByBmi[1].title : "None"}
                      image={
                        filteredByBmi[1] ? filteredByBmi[1].image_url : "None"
                      }
                      state={
                        filteredByBmi[1]
                          ? filteredByBmi[1].locationName
                          : "None"
                      }
                      difficulty={
                        filteredByBmi[1] ? filteredByBmi[1].grade : "None"
                      }
                    />
                  </div>
                </>
              )}
            </MotionElement>
          </div>
          <MotionElement component="div" delay={0.4} className="w-full flex flex-row justify-center items-center gap-4 py-6 border-t border-calc-bound max-w-6xl">
            <div
              className="w-fit flex flex-row justify-center items-center gap-3 px-6 py-3 border rounded-lg border-footer-main bg-setting-button cursor-pointer"
              onClick={() =>
                window.open("https://www.scoutripper.com/trekgenie/", "_blank")
              }
            >
              <p className="text-xs sm:text-sm font-semibold text-header-main">
                Ask TrekGenie
              </p>
              <img src={Link} alt="Link" className="h-3" />
            </div>
            <div
              className="w-fit flex flex-row justify-center items-center gap-3 px-6 py-3 border rounded-lg border-footer-main bg-setting-button cursor-pointer"
              onClick={() =>
                window.open("https://scoutripper.com/compare-treks/", "_blank")
              }
            >
              <p className="text-xs sm:text-sm font-semibold text-header-main">
                Compare Treks
              </p>
              <img src={Link} alt="Link" className="h-3" />
            </div>
          </MotionElement>
          <div className="font-normal">
            <Footer />
          </div>
        </div>
        {showDetails && !isMobile && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-setting-overlay/23 flex justify-center items-center">
            <MotionElement component="div" delay={0.05} duration={0.7} className="w-full max-w-3xl bg-setting-modal p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-header-main">
                  What is BMI?
                </h1>
                <RiCloseFill
                  className="w-6 h-6 text-gray-500 cursor-pointer"
                  onClick={() => setShowDetails(false)}
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-header-main">
                  BMI (Body Mass Index) is a numerical value calculated from a
                  person's height and weight to determine if they are
                  underweight, normal weight, overweight, or obese. It helps
                  assess body fat levels and potential health risks.
                </p>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-semibold text-header-main ">
                  Why is BMI Important for Trekking?
                </h1>
                <div className="flex flex-row justify-start items-center gap-5 mt-3">
                  <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  <p className="text-sm font-medium text-header-main">
                    Helps determine fitness level for trekking.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  <p className="text-sm font-medium text-header-main">
                    Guides in choosing suitable trek difficulty levels.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  <p className="text-sm font-medium text-header-main">
                    Aids in planning nutrition & fitness training for better
                    endurance.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-6 bg-setting-note px-5 py-2 rounded-md border border-note-bound">
                <p className="text-sm font-medium text-accent-secondary">
                  <strong>Note:</strong> BMI has limitations and doesn't account
                  for muscle mass, bone density, or overall body composition.
                  Consult a healthcare professional for a complete health
                  assessment.
                </p>
              </div>
            </MotionElement>
          </div>
        )}
        {showDetails && isMobile && (
          <div className="fixed inset-0 flex items-end justify-center bg-setting-overlay/23 bg-opacity-50 z-50">
            <MotionElement component="div" delay={0.1} duration={0.5} className="w-full max-w-3xl bg-setting-modal p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-header-main">
                  What is BMI?
                </h1>
                <RiCloseFill
                  className="w-6 h-6 text-gray-500 cursor-pointer"
                  onClick={() => setShowDetails(false)}
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium text-header-main">
                  BMI (Body Mass Index) is a numerical value calculated from a
                  person's height and weight to determine if they are
                  underweight, normal weight, overweight, or obese. It helps
                  assess body fat levels and potential health risks.
                </p>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-semibold text-header-main ">
                  Why is BMI Important for Trekking?
                </h1>
                <div className="flex flex-row justify-start items-center gap-5 mt-3">
                  <span className="size-4">
                    <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  </span>
                  <p className="text-sm font-medium text-header-main">
                    Helps determine fitness level for trekking.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <span className="size-4">
                    <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  </span>
                  <p className="text-sm font-medium text-header-main">
                    Guides in choosing suitable trek difficulty levels.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <span className="size-4">
                    <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  </span>
                  <p className="text-sm font-medium text-header-main">
                    Aids in planning nutrition & fitness training for better
                    endurance.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-6 bg-setting-note px-5 py-2 rounded-md border border-note-bound">
                <p className="text-sm font-medium text-accent-secondary">
                  <strong>Note:</strong> BMI has limitations and doesn't account
                  for muscle mass, bone density, or overall body composition.
                  Consult a healthcare professional for a complete health
                  assessment.
                </p>
              </div>
            </MotionElement>
          </div>
        )}
        {showTips && !isMobile && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-setting-overlay/23 flex justify-center items-center">
            <MotionElement component="div" delay={0.05} duration={0.7} className="w-fit max-w-3xl bg-setting-modal p-6 rounded-lg ">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-header-main">
                  Tips To Consider
                </h1>
                <RiCloseFill
                  className="w-6 h-6 text-gray-500 cursor-pointer"
                  onClick={() => setShowTips(false)}
                />
              </div>
              <div className="mt-3">
                <h2 className="text-xl font-semibold text-header-main">
                  BMI Categories
                </h2>
                <div className="flex flex-row justify-start items-center gap-5 mt-3 mb-4">
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#3B86ED]/5 rounded-xl border border-[#3B86ED]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#3B86ED]">
                        Underweight
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        Below 18.5
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      May indicate nutritional deficiency
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#28BF70]/5 rounded-xl border border-[#28BF70]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#28BF70]">
                        Normal
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        18.5 - 24.9
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      Generally considered healthy
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-3">
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#FA8232]/5 rounded-xl border border-[#FA8232]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#FA8232]">
                        Overweight
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        25 - 29.9
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      May lead to health issues
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#FA3538]/5 rounded-xl border border-[#FA3538]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#FA3538]">
                        Obese
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        30+
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      Increased risk for several health conditions
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-semibold text-header-main ">
                  Recommendations:
                </h1>
                <div className="flex flex-row justify-start items-center gap-5 mt-3">
                  <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  <p className="text-sm font-medium text-header-main">
                    Consider consulting with a healthcare provider about healthy
                    weight gain strategies.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  <p className="text-sm font-medium text-header-main">
                    Focus on nutrient-rich foods to increase caloric intake.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  <p className="text-sm font-medium text-header-main">
                    Include strength training to build muscle mass.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-6 bg-setting-note px-5 py-2 rounded-md border border-note-bound">
                <p className="text-sm font-medium text-accent-secondary">
                  <strong>Note:</strong> BMI has limitations and doesn't account
                  for muscle mass, bone density, or overall body composition.
                  Consult a healthcare professional for a complete health
                  assessment.
                </p>
              </div>
            </MotionElement>
          </div>
        )}
        {showTips && isMobile && (
          <div className="fixed inset-0 flex items-end justify-center bg-setting-overlay/23 bg-opacity-50 z-50">
            <MotionElement component="div" delay={0.1} duration={0.5} className="w-full max-w-3xl bg-setting-modal p-6 rounded-lg max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-header-main">
                  Tips To Consider
                </h1>
                <RiCloseFill
                  className="w-6 h-6 text-gray-500 cursor-pointer"
                  onClick={() => setShowTips(false)}
                />
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold text-header-main">
                  BMI Categories
                </h2>
                <div className="flex flex-col justify-start items-center gap-3 mt-3">
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#3B86ED]/5 rounded-xl border border-[#3B86ED]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#3B86ED]">
                        Underweight
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        Below 18.5
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      May indicate nutritional deficiency
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#28BF70]/5 rounded-xl border border-[#28BF70]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#28BF70]">
                        Normal
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        18.5 - 24.9
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      Generally considered healthy
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#FA8232]/5 rounded-xl border border-[#FA8232]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#FA8232]">
                        Overweight
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        25 - 29.9
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      May lead to health issues
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-2 py-4 px-6 bg-[#FA3538]/5 rounded-xl border border-[#FA3538]">
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                      <p className="text-xl font-semibold text-[#FA3538]">
                        Obese
                      </p>
                      <p className="text-header-main text-base font-semibold">
                        30+
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-header-main">
                      Increased risk for several health conditions
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-2xl font-semibold text-header-main ">
                  Recommendations:
                </h1>
                <div className="flex flex-row justify-start items-center gap-5 mt-3">
                  <span className="size-4">
                    <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  </span>
                  <p className="text-sm font-medium text-header-main">
                    Consider consulting with a healthcare provider about healthy
                    weight gain strategies.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <span className="size-4">
                    <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  </span>
                  <p className="text-sm font-medium text-header-main">
                    Focus on nutrient-rich foods to increase caloric intake.
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-5 mt-2">
                  <span className="size-4">
                    <IoCheckmarkCircleOutline className="text-header-main h-4" />
                  </span>
                  <p className="text-sm font-medium text-header-main">
                    Include strength training to build muscle mass.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-6 bg-setting-note px-5 py-2 rounded-md border border-note-bound">
                <p className="text-sm font-medium text-accent-secondary">
                  <strong>Note:</strong> BMI has limitations and doesn't account
                  for muscle mass, bone density, or overall body composition.
                  Consult a healthcare professional for a complete health
                  assessment.
                </p>
              </div>
            </MotionElement>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
