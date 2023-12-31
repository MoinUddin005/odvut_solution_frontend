import Image from 'next/image';
import React from 'react';

const GetTouch = () => {
    return (
        <div>
            <div className="container md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7 md:col-span-6">
                        <Image src="/assets/images/contact.svg" width="500" height="500" alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6 mt-8 md:mt-0">
                        <div className="lg:ml-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

                                <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label for="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="user" className="w-4 h-4 absolute top-3 left-4"></i>
                                                    <input name="name" id="name" type="text" className="form-input pl-11" placeholder="Name :"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label for="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="mail" className="w-4 h-4 absolute top-3 left-4"></i>
                                                    <input name="email" id="email" type="email" className="form-input pl-11" placeholder="Email :"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-left">
                                                <label for="subject" className="font-semibold">Your Question:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="book" className="w-4 h-4 absolute top-3 left-4"></i>
                                                    <input name="subject" id="subject" className="form-input pl-11" placeholder="Subject :"/>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="mb-5">
                                            <div className="text-left">
                                                <label for="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="message-circle" className="w-4 h-4 absolute top-3 left-4"></i>
                                                    <textarea name="comments" id="comments" className="form-input pl-11 h-28" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--end container--> */}
        </div>
    );
};

export default GetTouch;