import React from "react";

const WhatWeDo = ({ data }) => {
  return (
    <div>
      <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
        <div className="relative overflow-hidden text-transparent -m-3">
          <i
            data-feather="hexagon"
            className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"
          ></i>
          <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
            <i className={data.icon}></i>
          </div>
        </div>

        <div className="mt-6">
          <a
            href=""
            className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out"
          >
            {data.name}
          </a>
          <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">
            {data.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
