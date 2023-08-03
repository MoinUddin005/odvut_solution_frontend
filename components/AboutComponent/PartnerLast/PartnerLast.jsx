import Image from 'next/image';
import React from 'react';

const PartnerLast = ({data}) => {
    return (
        <div>
            <div  className="tiny-slide text-center">
                  <Image src={data.image} width="500" height="500" className="h-6 mx-auto" alt="s" />
                  <p className="text-slate-400 mt-6">{data.details}</p>
                  <h6 className="text-indigo-600 font-semibold mt-3">
                    {data.name}
                  </h6>
                </div>
        </div>
    );
};

export default PartnerLast;