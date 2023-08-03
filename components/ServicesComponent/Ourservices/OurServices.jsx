import React from "react";
import OurServicesData from "../../../data/OurServices.json";
import OurService from "./OurService";

const OurServices = () => {
  const allData = OurServicesData.Data;
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          {allData?.map((data, index) => (
           <OurService key={index} data={data}></OurService>
          ))}
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}
    </div>
  );
};

export default OurServices;
