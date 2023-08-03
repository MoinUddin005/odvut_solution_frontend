import React from 'react';
import StartHero from "~/components/HomeComponents/StartHero/StartHero";
import BusinessPartner from "~/components/HomeComponents/BusinessPartner/BusinessPartner";
import WhoWeAre from "~/components/HomeComponents/WhoWeAre/WhoWeAre";
import FastEffective from "~/components/HomeComponents/FastEffective/FastEffective";
import StopLeavingMoney from "~/components/HomeComponents/StopLeavingMoney/StopLeavingMoney";
import WhatOurUsersSay from "~/components/HomeComponents/WhatOurUsersSay/WhatOurUsersSay";
import Blogs from '~/components/HomeComponents/Blogs/Blogs';
import WhatWeDos from '~/components/HomeComponents/WhatWeDo/WhatWeDos';


export default function Home() {
  return (
    <>
      <StartHero />
      <BusinessPartner />
      <WhatWeDos />
      <WhoWeAre />
      <FastEffective />
      <StopLeavingMoney />
      <WhatOurUsersSay />
      <Blogs/>
    </>
  );
}
