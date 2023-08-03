import Image from "next/image";
import React from "react";

const WhatOurUserSay = ({ data }) => {
  return (
    <div>
      <div className="tiny-slide text-center">
        <div className="customer-testi">
          <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
            <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
            <p className="text-slate-400">{data.details}</p>
            <ul className="list-none mb-0 text-amber-400 mt-3">
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
              <li className="inline">
                <i className="mdi mdi-star"></i>
              </li>
            </ul>
          </div>

          <div className="text-center mt-5">
            <Image
              src={data.image}
              width="500"
              height="500"
              className="h-14 w-14 rounded-full shadow-md mx-auto"
              alt=""
            />
            <h6 className="mt-2 font-semibold">{data.name}</h6>
            <span className="text-slate-400 text-sm">{data.position}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurUserSay;
