import { useTranslations } from 'next-intl';
import React from 'react';
import "./Banner.scss";
import { companies } from "./companies"
import Image from 'next/image';

const Banner = () => {
    const t = useTranslations('Banner');

    return (
        <div className="banner mt-140">
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="banner_box">
                            <div className="box_header mb-5">
                                <h1 className="hero_title mb-5">{t('title')}</h1>
                                <p className='hero_subtitle mb-5'>
                                    {t('subtitle')}
                                </p>
                                <button type='button' className='btn'>
                                    {t('button')} <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>

                            <div className="companies">
                                <ul className="company_list">
                                    {
                                        companies.map((company: {
                                            name: string; id: React.Key | null | undefined; src: string | undefined;
                                        }) => (
                                            <li key={company.id}>
                                                <Image src={company.src} width={80} height={80} alt={company.name} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner;
