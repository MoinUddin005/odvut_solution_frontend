import Image from 'next/image';
import React from 'react';

const Blog = ({data}) => {
    return (
        <div>
             <div
              className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden"
            >
              <Image src={data.image} width="500" height="500" alt="" />

              <div className="content p-6">
                <a
                  href="blog-detail.html"
                  className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                >
                  {data.title}
                </a>
                <p className="text-slate-400 mt-3">{data.details}</p>

                <div className="mt-4">
                  <a
                    href="blog-detail.html"
                    className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    Read More <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Blog;