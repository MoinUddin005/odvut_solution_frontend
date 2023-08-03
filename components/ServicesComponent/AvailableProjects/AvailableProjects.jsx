import React from 'react';

const AvailableProjects = () => {
    return (
        <div className='relative md:py-24 py-16'>
            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <h6 className="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br/> Let's talk.</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Technic that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <div className="mt-6">
                        <a href="contact-us.html" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-phone"></i> Contact Us</a>
                    </div>
                </div>
                {/* <!--end grid--> */}
            </div>
        </div>
    );
};

export default AvailableProjects;