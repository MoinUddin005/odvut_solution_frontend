import Image from "next/image";
import React from "react";

const LatestProjectWork = ({ data }) => {
  return (
    <div>
      <div className="tiny-slide">
        <div className="group relative block overflow-hidden rounded-md transition-all duration-500 mx-2">
          <a
            href="assets/images/portfolio/1.jpg"
            className="lightbox transition-all duration-500 group-hover:scale-105"
            title=""
          >
            <Image
              src={data.image}
              width="500"
              height="500"
              className=""
              alt="work-image"
            />
          </a>
          <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
            <a
              href="portfolio-detail.html"
              className="hover:text-indigo-600 text-lg transition duration-500 font-medium"
            >
              {data.title}
            </a>
            <h6 className="text-slate-400">{data.Brand}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjectWork;
