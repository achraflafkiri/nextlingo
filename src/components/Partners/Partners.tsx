import React from 'react';
import Image from 'next/image';
import './Partners.scss';
import partners from './data';

const Partners = () => {

    return (
        <div className='partners default-padding'>
            <div className="wrapper">
                <h2 className='section_title'>
                    Our Trusted Partners
                </h2>
                <p className='section_subtitle'>
                    Powering the world’s best advertisers, from startups led by solo founders to global enterprises.
                </p>
                <div className="partners_cards">
                    {
                        partners.map(partner => (
                            <div className="company-wrapper" key={partner.id}>
                                <Image
                                    src={partner.src}
                                    loading="lazy"
                                    alt={partner.name}
                                    height={200}
                                    width={200}
                                    className="company-icon is-renault"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Partners;
