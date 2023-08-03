import React from "react";

const OurService = ({ data }) => {
  return (
    <div>
      <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center">
        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <i className={data.icon}></i>
        </div>

        <div className="content mt-7">
          <a
            href="services.html"
            className="title h5 text-lg font-medium hover:text-indigo-600"
          >
            {data.name}
          </a>
          <p className="text-slate-400 mt-3">{data.details}</p>

          <div className="mt-5">
            <a
              href="services.html"
              className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              Read More <i className="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
