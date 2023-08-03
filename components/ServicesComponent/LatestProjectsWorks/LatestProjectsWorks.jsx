import Image from "next/image";
import React from "react";
import LatestProjectsWorksData from "../../../data/LatestProjectsWorks.json";
import LatestProjectWork from "./LatestProjectWork";
const LatestProjectsWorks = () => {
  const allData = LatestProjectsWorksData.Data;
  return (
    <div>
      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 items-end">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Latest Projects & Works
          </h3>
          <p className="text-slate-400 max-w-xl">
            Explore and learn more about everything from machine learning and
            global payments to scaling your team.
          </p>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}

      <div className="container-fluid relative mt-8">
        <div className="grid grid-cols-1 mt-8">
          <div className="tiny-six-item">
            {allData?.map((data, index) => (
              <LatestProjectWork key={index} data={data}></LatestProjectWork>
            ))}
          </div>
        </div>
      </div>
      {/* <!--end container--> */}
    </div>
  );
};

export default LatestProjectsWorks;
