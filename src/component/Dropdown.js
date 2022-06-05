import React, { useState } from 'react';

const Dropdown = () => {
  const [dropShow, setdropShow] = useState(false);
  return (
    <div className=" relative">
      <button
        className="text-[15px] line-height-[21px] text-emerald-500 flex items-center"
        onClick={() => setdropShow(!dropShow)}
      >
        <div className="mr-[7.76px]">Can Edit</div>
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.96967 0.21967C1.26256 -0.0732233 1.73744 -0.0732233 2.03033 0.21967L6 4.18934L9.96967 0.21967C10.2626 -0.0732233 10.7374 -0.0732233 11.0303 0.21967C11.3232 0.512563 11.3232 0.987437 11.0303 1.28033L6.53033 5.78033C6.23744 6.07322 5.76256 6.07322 5.46967 5.78033L0.96967 1.28033C0.676777 0.987437 0.676777 0.512563 0.96967 0.21967Z"
            fill="#10B981"
          />
        </svg>
      </button>
      <div
        className={`${
          dropShow ? 'flex' : 'hidden'
        } absolute bg-white top-[28px] right-0 modal-shadow min-w-[180px] w-full p-1 z-50 h-[100px] flex-col justify-between`}
      >
        <a
          href="!#"
          className="h-[28px] flex items-center text-stone-800 px-[6px]"
        >
          Can view
        </a>
        <a
          href="!#"
          className="h-[28px] flex items-center text-emerald-500  px-[6px] flex justify-between"
        >
          Can edit
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0325 0.407499C10.9628 0.337202 10.8799 0.281406 10.7885 0.24333C10.6971 0.205253 10.599 0.18565 10.5 0.18565C10.401 0.18565 10.303 0.205253 10.2116 0.24333C10.1202 0.281406 10.0372 0.337202 9.96752 0.407499L4.38002 6.0025L2.03252 3.6475C1.96013 3.57757 1.87468 3.52258 1.78103 3.48568C1.68739 3.44878 1.5874 3.43068 1.48677 3.43242C1.38613 3.43416 1.28682 3.45571 1.19451 3.49583C1.1022 3.53595 1.0187 3.59386 0.948773 3.66625C0.878844 3.73864 0.823859 3.8241 0.786956 3.91774C0.750053 4.01138 0.731955 4.11137 0.733696 4.21201C0.735437 4.31264 0.756983 4.41195 0.797103 4.50426C0.837223 4.59657 0.895132 4.68007 0.967523 4.75L3.84752 7.63C3.91725 7.7003 4.0002 7.75609 4.09159 7.79417C4.18299 7.83224 4.28101 7.85185 4.38002 7.85185C4.47903 7.85185 4.57706 7.83224 4.66846 7.79417C4.75985 7.75609 4.8428 7.7003 4.91252 7.63L11.0325 1.51C11.1087 1.43977 11.1694 1.35453 11.211 1.25965C11.2525 1.16478 11.274 1.06233 11.274 0.958749C11.274 0.855172 11.2525 0.752719 11.211 0.657844C11.1694 0.562969 11.1087 0.47773 11.0325 0.407499Z"
              fill="#10B981"
            />
          </svg>
        </a>
        <a
          href="!#"
          className="h-[28px] flex items-center text-rose-500  px-[6px]"
        >
          Remove user
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
