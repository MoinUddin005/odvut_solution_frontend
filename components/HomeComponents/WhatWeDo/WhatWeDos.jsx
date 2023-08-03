import React from "react";
import whatWeDoData from "../../../data/WhatWeDo.json";
import WhatWeDo from "./WhatWeDo";

const WhatWeDos = () => {
  const allData = whatWeDoData.Data;
  return (
    <div>
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What we do ?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Create, collaborate, and turn your ideas into incredible products
              with the definitive platform for digital design.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {allData?.map((data, index) => (
              <WhatWeDo key={index} data={data}></WhatWeDo>
            ))}
            {/* <!--end feature--> */}
          </div>
        </div>
        {/* <!--end container--> */}

        {/* <!--end container--> */}
      </section>
    </div>
  );
};

export default WhatWeDos;
