import Image from "next/image";
import React from "react";
import partnerLastData from "../../../data/PartnerLast.json";
import PartnerLast from "./PartnerLast";
const PartnersLast = () => {
  const allData = partnerLastData.Data;
  return (
    <div>
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
          <div className="lg:col-span-5 md:col-span-6 md:order-1 order-2">
            <div className="relative overflow-hidden after:content-[''] after:absolute after:h-40 after:w-40 after:bg-red-600/5 after:top-5 after:left-0 after:right-0 after:mx-auto after:-z-0 after:rounded-3xl after:animate-[spin_10s_linear_infinite]">
              <Image src="/assets/images/hero2.png" width="500" height="500" className="relative z-1" alt="a" />
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6 md:order-2 order-1">
            <div className="tiny-single-item">
              {allData?.map((data, index) => (
                <PartnerLast key={index} data={data}></PartnerLast>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!--end container--> */}
    </div>
  );
};

export default PartnersLast;
