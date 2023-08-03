import React from 'react';

const KeyFeature = ({data}) => {
    return (
        <div>
            <div
                
                className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900"
              >
                <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                  <i
                    data-feather={data.imageName}
                    className="h-5 w-5 rotate-45"
                  ></i>
                </div>
                <div className="flex-1">
                  <h4 className="mb-0 text-lg font-medium">{data.name}</h4>
                </div>
              </div>
        </div>
    );
};

export default KeyFeature;