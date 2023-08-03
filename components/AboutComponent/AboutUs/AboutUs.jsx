import React from 'react';

const AboutUs = () => {
    return (
        <div className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
             <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            {/* <!-- <div className="absolute inset-0 bg-black opacity-75"></div> --> */}
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">About Us</h3>

                    <p className="text-lg max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
            
            <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
                <ul className="breadcrumb tracking-[0.5px] mb-0 inline-block">
                    <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><a href="index.html">Technic</a></li>
                    <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><a href="">Utility</a></li>
                    <li className="inline breadcrumb-item uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Privacy</li>
                </ul>
            </div>
        </section>
        </div>
    );
};

export default AboutUs;