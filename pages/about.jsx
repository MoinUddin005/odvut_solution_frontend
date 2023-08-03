import React from 'react';
import AboutUs from '~/components/AboutComponent/AboutUs/AboutUs';
import WhoWeAre from "~/components/HomeComponents/WhoWeAre/WhoWeAre.jsx";
import BusinessPartner from "~/components/HomeComponents/BusinessPartner/BusinessPartner";
import KeyFeatures from '~/components/AboutComponent/KeyFeatures/KeyFeatures.jsx';
import OurProfessionalTeams from '~/components/AboutComponent/OurProfessionalTeam/OurProfessionalTeams.jsx';
import PartnersLast from '~/components/AboutComponent/PartnerLast/PartnersLast.jsx';

const about = () => {
    return (
        <>
            <AboutUs/>
            <WhoWeAre/>
            <BusinessPartner/>
            <KeyFeatures/>
            <OurProfessionalTeams/>
            <PartnersLast/>
        </>
    );
};

export default about;