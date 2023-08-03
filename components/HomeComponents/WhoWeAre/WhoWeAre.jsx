import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="relative md:py-24 py-16">
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <Image
                    src="/assets/images/about/ab03.jpg"
                    width="500" height="500"
                    className="shadow rounded-md"
                    alt=""
                  />
                  <Image
                    src="/assets/images/about/ab02.jpg"
                    width="500" height="500"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <Image
                    src="/assets/images/about/ab01.jpg"
                    width="500" height="500"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ml-5">
              <div className="flex mb-4">
                <span className="text-indigo-600 text-2xl font-bold mb-0">
                  <span
                    className="counter-value text-6xl font-bold"
                    data-target="15"
                  >
                    15
                  </span>
                  +
                </span>
                <span className="self-end font-medium ml-2">
                  Years <br /> Experience
                </span>
              </div>

              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                Who we are ?
              </h3>

              <p className="text-slate-400 max-w-xl">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect. Dummy text
                is text that is used in the publishing industry or by web
                designers to occupy the space which will later be filled with
                real content.
              </p>

              <div className="mt-6">
                <a
                  href="contact-one.html"
                  className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
                >
                  <i className="uil uil-envelope"></i> Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
    </div>
  );
};

export default WhoWeAre;
