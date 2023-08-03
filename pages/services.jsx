import React from 'react';
import AboutUs from '~/components/AboutComponent/AboutUs/AboutUs';
import WhatOurUsersSay from '~/components/HomeComponents/WhatOurUsersSay/WhatOurUsersSay';
import AvailableProjects from '~/components/ServicesComponent/AvailableProjects/AvailableProjects';
import LatestProjectsWorks from '~/components/ServicesComponent/LatestProjectsWorks/LatestProjectsWorks';
import OurServices from '~/components/ServicesComponent/Ourservices/OurServices';

const services = () => {
    return (
        <div>
            <AboutUs/>
            <OurServices/>
            <LatestProjectsWorks/>
            <WhatOurUsersSay/>
            <AvailableProjects/>
        </div>
    );
};

export default services;