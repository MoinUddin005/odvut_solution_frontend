import Image from "next/image";
import React from "react";

const FastEffective = () => {
  return (
    <div className="relative md:py-24 py-16">
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="lg:ml-8">
              <Image src="/assets/images/shape-image.png" width="500" height="500" alt="" />
            </div>
          </div>

          <div className="md:col-span-6 order-2 md:order-1">
            <div className="lg:ml-5">
              <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
                Fast & Effective
              </h6>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Powerful Digitalization <br /> With Techwind
              </h3>

              <p className="text-slate-400 max-w-xl mb-6">
                Get instant helpful resources about anything on the go, easily
                implement secure money transfer solutions, boost your daily
                efficiency, connect to other app users and create your own
                Techwind network, and much more with just a few taps. commodo
                consequat. Duis aute irure.
              </p>

              <a
                href="page-services.html"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                <i className="uil uil-notes"></i> Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastEffective;
