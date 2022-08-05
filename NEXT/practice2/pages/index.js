import React from "react";
import RecommendButton from '../components/RecommendButton'
import ReturnButton from "../components/ReturnButton";
import BorrowButton from "../components/BorrowButton";
import SearchButton from "../components/SearchButton";

export default function MainEx() {
  return (
    <div className="MainEx">
      <ReturnButton />
      <RecommendButton />
      <BorrowButton />
      <SearchButton />
      <Frame1 />
      <style jsx>{`
        .MainEx {
          width: 1440px;
          height: 2560px;
          background-color: rgba(15, 29, 160, 0.65);
        }
      `}</style>
    </div>
  );
}

function Property1recommandProperty2default() {
  return (
    <div className="Property1recommandProperty2default">

      <span className="dfs">추천</span>
      <recommend className="recommend" />
      <recommend className="recommend" />
      <style jsx>{`
        .Property1recommandProperty2default {
          margin: 20px 20px;
          width: 672px;
          height: 608px;
          box-shadow: 4px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .mainbtn_pressed {
          width: 100%;
          height: 100%;
          background-color: #233173;
          box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .dfs {
          margin: 172px 351px;
          width: 48.66%;
          height: 42.27%;
          color: #ffffff;
          font-family: Noto Sans, sans-serif;
          font-size: 150px;
          line-height: 175.78125px;
          text-align: center;
          text-align-vertical: center;
        }
        .recommend {
          margin: 192px 63px;
          width: 42.86%;
          height: 47.37%;
        }
        .recommend {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
        }
        .recommend {
          margin: 192px 63px;
          width: 42.86%;
          height: 47.37%;
        }
        .recommend {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}

function Property1searchProperty2default() {
  return (
    <div className="Property1searchProperty2default">
      <svg
        width="752"
        height="688"
        viewBox="0 0 752 688"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_79_221)">
          <g filter="url(#filter1_d_79_221)">
            <path d="M36 24H708V632H36V24Z" fill="#233173" />
          </g>
          <path
            d="M344.062 438.1V573.7H356.062V438.1H344.062ZM321.112 492.4V502.75H347.212V492.4H321.112ZM313.312 441.1V566.8H325.012V441.1H313.312ZM245.812 529.9V540.25H254.662C275.062 540.25 288.712 539.65 304.912 536.2L303.712 525.85C287.962 529.15 274.462 529.9 254.662 529.9H245.812ZM245.812 454.6V534.55H258.112V464.8H296.212V454.6H245.812ZM440.05 468.25V478.6H481V468.25H440.05ZM440.05 511.15V521.5H481V511.15H440.05ZM415.15 448.45C395.35 448.45 381.4 466.9 381.4 495.7C381.4 524.65 395.35 543.1 415.15 543.1C434.8 543.1 448.9 524.65 448.9 495.7C448.9 466.9 434.8 448.45 415.15 448.45ZM415.15 459.7C428.2 459.7 437.2 473.8 437.2 495.7C437.2 517.75 428.2 532.15 415.15 532.15C402.1 532.15 393.1 517.75 393.1 495.7C393.1 473.8 402.1 459.7 415.15 459.7ZM478.3 437.95V573.85H490.6V437.95H478.3Z"
            fill="white"
          />
          <path
            d="M344.062 438.1V573.7H356.062V438.1H344.062ZM321.112 492.4V502.75H347.212V492.4H321.112ZM313.312 441.1V566.8H325.012V441.1H313.312ZM245.812 529.9V540.25H254.662C275.062 540.25 288.712 539.65 304.912 536.2L303.712 525.85C287.962 529.15 274.462 529.9 254.662 529.9H245.812ZM245.812 454.6V534.55H258.112V464.8H296.212V454.6H245.812ZM440.05 468.25V478.6H481V468.25H440.05ZM440.05 511.15V521.5H481V511.15H440.05ZM415.15 448.45C395.35 448.45 381.4 466.9 381.4 495.7C381.4 524.65 395.35 543.1 415.15 543.1C434.8 543.1 448.9 524.65 448.9 495.7C448.9 466.9 434.8 448.45 415.15 448.45ZM415.15 459.7C428.2 459.7 437.2 473.8 437.2 495.7C437.2 517.75 428.2 532.15 415.15 532.15C402.1 532.15 393.1 517.75 393.1 495.7C393.1 473.8 402.1 459.7 415.15 459.7ZM478.3 437.95V573.85H490.6V437.95H478.3Z"
            fill="white"
          />
          <path
            d="M246 375C240.9 375 236.622 373.272 233.166 369.816C229.722 366.372 228 362.1 228 357V195C228 189.9 229.722 185.622 233.166 182.166C236.622 178.722 240.9 177 246 177C251.1 177 255.378 178.722 258.834 182.166C262.278 185.622 264 189.9 264 195V339H408C413.1 339 417.378 340.728 420.834 344.184C424.278 347.628 426 351.9 426 357C426 362.1 424.278 366.372 420.834 369.816C417.378 373.272 413.1 375 408 375H246ZM336 285C330.9 285 326.628 283.272 323.184 279.816C319.728 276.372 318 272.1 318 267V105C318 99.9 319.728 95.622 323.184 92.166C326.628 88.722 330.9 87 336 87C341.1 87 345.378 88.722 348.834 92.166C352.278 95.622 354 99.9 354 105V249H498C503.1 249 507.372 250.722 510.816 254.166C514.272 257.622 516 261.9 516 267C516 272.1 514.272 276.372 510.816 279.816C507.372 283.272 503.1 285 498 285H336Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_79_221"
            x="0"
            y="0"
            width="752"
            height="688"
            filterUnits="userSpaceOnUse"
            colorInterpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="16" />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="color"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_79_221"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_79_221"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_79_221"
            x="0"
            y="0"
            width="752"
            height="688"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="16" />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_79_221"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_79_221"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <span className="dfs">검색</span>
      <search className="search" />
      <style jsx>{`
        .Property1searchProperty2default {
          margin: 20px 20px;
          width: 672px;
          height: 608px;
          box-shadow: 4px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .mainbtn_pressed {
          width: 100%;
          height: 100%;
          background-color: #233173;
          box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .dfs {
          margin: 172px 351px;
          width: 48.66%;
          height: 42.27%;
          color: #ffffff;
          font-family: Noto Sans, sans-serif;
          font-size: 150px;
          line-height: 175.78125px;
          text-align: center;
          text-align-vertical: center;
        }
        .search {
          margin: 201px 63px;
          width: 42.86%;
          height: 47.37%;
        }
        .Boundingbox {
          width: 100%;
          height: 100%;
          background-color: #d9d9d9;
        }
        .search {
          margin: 36.00004577636719px 35.99992370605469px;
          width: 73.33%;
          height: 73.23%;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}

function Property1returnProperty2default() {
  return (
    <div className="Property1returnProperty2default">
      <span className="dfs">반납</span>
      <style jsx>{`
        .Property1returnProperty2default {
          margin: 20px 20px;
          width: 672px;
          height: 608px;
          box-shadow: 4px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .mainbtn_pressed {
          width: 100%;
          height: 100%;
          background-color: #233173;
          box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .arrows_more_up {
          margin: 191px 69px;
          width: 42.86%;
          height: 47.37%;
          background-color: #ffffff;
        }
        .dfs {
          margin: 172px 351px;
          width: 48.66%;
          height: 42.27%;
          color: #ffffff;
          font-family: Noto Sans, sans-serif;
          font-size: 150px;
          line-height: 175.78125px;
          text-align: center;
          text-align-vertical: center;
        }
      `}</style>
    </div>
  );
}

function btnrent() {
  return (
    <div className="btnrent">
      <span className="dfs">대여</span>
      <span className="dfs">대여</span>
      <arrows_more_down className="arrows_more_down" />
      <style jsx>{`
        .rental {
          margin: 20px 20px;
          width: 672px;
          height: 608px;
          box-shadow: 4px 16px 40px rgba(0, 0, 0, 0.25);
        }
        .mainbtn_pressed {
          width: 100%;
          height: 100%;
          background-color: #233173;
          box-shadow: 4px 16px 40px rgba(0, 0, 0, 0.5);
        }
        .dfs {
          margin: 172px 351px;
          width: 48.66%;
          height: 42.27%;
          color: #ffffff;
          font-family: Noto Sans, sans-serif;
          font-size: 150px;
          line-height: 175.78125px;
          text-align: center;
          text-align-vertical: center;
        }
        .dfs {
          margin: 172px 351px;
          width: 48.66%;
          height: 42.27%;
          color: #ffffff;
          font-family: Noto Sans, sans-serif;
          font-size: 150px;
          line-height: 175.78125px;
          text-align: center;
          text-align-vertical: center;
        }
        .arrows_more_down {
          margin: 192px 63px;
          width: 42.86%;
          height: 47.37%;
        }
        .arrows_more_down {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}

function Frame1() {
  return (
    <div className="Frame1">
      <div className="Ellipse23" />
      <image className="1" source="public/1.png" />
      <style jsx>{`
        .Frame1 {
          margin: 147px 66px;
          width: 983px;
          height: 983px;
        }
        .Ellipse23 {
          width: 100%;
          height: 100%;
          background-color: rgba(19, 33, 84, 0.8);
          border-radius: 50%;
        }
        .1 {
          margin: 304px 72px;
          width: 34.99%;
          height: 80.57%;
        }
      `}</style>
    </div>
  );
}

function search() {
  return (
    <div className="search">
      <div className="Boundingbox" />
  
      <style jsx>{`
        .search {
          margin: 872px 1136px;
          width: 288px;
          height: 288px;
        }
        .Boundingbox {
          width: 100%;
          height: 100%;
          background-color: #d9d9d9;
        }
        .search {
          margin: 36.00004577636719px 35.99992370605469px;
          width: 73.33%;
          height: 73.23%;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}

function arrows_more_down() {
  return (
    <div className="arrows_more_down">
      <style jsx>{`
        .arrows_more_down {
          margin: 248px 1794px;
          width: 288px;
          height: 288px;
        }
        .arrows_more_down {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}
