import Image from "next/image";
import React from "react";

import OurProfessionalTeamData from "../../../data/OurProfessionalTeam.json";
const OurProfessionalTeams = () => {
  const allData = OurProfessionalTeamData.Data;
  return (
    <div>
      {/* <!-- Start --> */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-0 pb-0">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Our Professional Team
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          {/* <!--end grid--> */}

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            {allData?.map((data, index) => (
              <div key={index} className="lg:col-span-3 md:col-span-6">
                <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                  <Image
                    src={data.image}
                    width="500" height="500"
                    className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800"
                    alt=""
                  />

                  <div className="content mt-4">
                    <a
                      href=""
                      className="text-lg font-medium hover:text-indigo-600 block"
                    >
                      {data.name}
                    </a>
                    <span className="text-slate-400 block">{data.position}</span>

                    <p className="text-slate-400 mt-4">{data.details}</p>

                    <ul className="list-none mt-4">
                      <li className="inline">
                        <a
                          href=""
                          className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                        >
                          <i data-feather="facebook" className="h-4 w-4"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href=""
                          className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                        >
                          <i data-feather="instagram" className="h-4 w-4"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href=""
                          className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                        >
                          <i data-feather="twitter" className="h-4 w-4"></i>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href=""
                          className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                        >
                          <i data-feather="linkedin" className="h-4 w-4"></i>
                        </a>
                      </li>
                    </ul>
                    {/* <!--end icon--> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!--end grid--> */}
        </div>
      </section>
      {/* <!--end section--> */}
      {/* <!-- End --> */}
    </div>
  );
};

export default OurProfessionalTeams;
