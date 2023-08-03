import React from 'react';

const ContactEmailPhone = () => {
    return (
        <div>
             <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div className="text-center px-6 mt-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-phone"></i>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title h5 text-xl font-medium">Phone</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <a href="tel:+152534-468-854" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">+152 534-468-854</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6 mt-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-envelope"></i>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title h5 text-xl font-medium">Email</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <a href="mailto:contact@example.com" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">contact@example.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6 mt-6">
                        <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i className="uil uil-map-marker"></i>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title h5 text-xl font-medium">Location</h5>
                            <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                            
                            <div className="mt-5">
                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                data-type="iframe" className="video-play-icon read-more lightbox btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">View on Google map</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
        </div>
    );
};

export default ContactEmailPhone;