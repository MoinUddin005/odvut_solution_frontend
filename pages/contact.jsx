import React from 'react';
import AboutUs from '~/components/AboutComponent/AboutUs/AboutUs';
import ContactEmailPhone from '~/components/ContactComponent/ContactEmailPhone/ContactEmailPhone';
import GetTouch from '~/components/ContactComponent/GetTouch/GetTouch';
import GoogleMap from '~/components/ContactComponent/GoogleMap/GoogleMap';

const Contact = () => {
    return (
        <div>
            <AboutUs/>
            <ContactEmailPhone/>
            <GetTouch/>
            <GoogleMap/>
        </div>
    );
};

export default Contact;