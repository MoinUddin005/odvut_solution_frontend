import Image from "next/image";
import React from "react";
import BlogsData from "../../../data/Blogs.json";
import Blog from "./Blog";

const Blogs = () => {
  const allData = BlogsData.Data;
  return (
    <div>
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
          <div className="md:col-span-6">
            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
              Blogs
            </h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Reads Our Latest <br /> News & Blog
            </h3>
          </div>

          <div className="md:col-span-6">
            <p className="text-slate-400 max-w-xl">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>
        {/* <!--end grid--> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          {allData?.map((data, index) => (
           <Blog key={index} data={data}></Blog>
          ))}
        </div>
        {/* <!--end grid--> */}
      </div>
    </div>
  );
};

export default Blogs;
