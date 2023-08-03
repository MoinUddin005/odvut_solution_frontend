import React from 'react';

const StopLeavingMoney = () => {
    return (
        <div>
            <section className="py-20 w-full table relative bg-[url('../../assets/images/team.jpg')] bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Stop leaving money on the table.</h3>

                    <p className="text-white/70 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </a>
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        </div>
    );
};

export default StopLeavingMoney;