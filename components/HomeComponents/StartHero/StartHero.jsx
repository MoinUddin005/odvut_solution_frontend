import Image from 'next/image';
import React from 'react';

const StartHero = () => {
    return (
        <div>
            <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-indigo-600 bg-[url('../../assets/images/bg2.png')] bg-center bg-no-repeat">
            <div className="container">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7">
                        <div className="md:mr-6 md:mb-20">
                            <h5 className="text-lg text-white/60">We are creative</h5>
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Best IT Solution <br/> Company</h4>
                            <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                        
                            <div className="mt-6">
                                <a href="contact-one.html" className="btn bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md mr-2 mt-2"><i className="uil uil-envelope"></i> Get Started</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 mt-8 md:mt-0">
                        <Image src="/assets/images/hero1.png" width="500" height="500" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        

        <div className="relative">
            <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
                <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        </div>
    );
};

export default StartHero;