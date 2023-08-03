import React from "react";
import KeyFeaturesData from "../../../data/KeyFeatures.json";
import KeyFeature from "./KeyFeature";

const KeyFeatures = () => {
  const allData = KeyFeaturesData.Data;
  return (
    <div className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Key Features
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          {/* <!--end grid--> */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
            {allData?.map((data, index) => (
              <KeyFeature key={index} data={data}></KeyFeature>
            ))}
          </div>
          {/* <!--end grid--> */}

          <div className="grid grid-cols-1 justify-center">
            <div className="mt-6 text-center">
              <a
                href="services.html"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
              >
                See More <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!--end contanier--> */}
      </section>
      {/* <!--end section--> */}
    </div>
  );
};

export default KeyFeatures;
