import Image from "next/image";
import React from "react";
import whatOurUsersSayData from "../../../data/WhatOurUsersSay.json";
import WhatOurUserSay from "./WhatOurUserSay";

const WhatOurUsersSay = () => {
  const allData = whatOurUsersSayData.Data;
  return (
    <div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What Our Users Say
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
          {/* <!--end grid--> */}

          <div className="grid grid-cols-1 mt-8">
            <div className="tiny-three-item">
              {allData?.map((data, index) => (
                <WhatOurUserSay key={index} data={data}></WhatOurUserSay>
              ))}
            </div>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}


        {/* <!--end container--> */}
      </section>
    </div>
  );
};

export default WhatOurUsersSay;
