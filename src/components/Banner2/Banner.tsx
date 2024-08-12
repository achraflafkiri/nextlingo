import { useTranslations } from 'next-intl';
import React from 'react';
import "./Banner.scss";
import { companies } from "./companies"
import Image, { StaticImageData } from 'next/image';

const Banner = () => {
    const t = useTranslations('Banner');

    return (
        <div className="banner mt-140">
            <div className="wrapper">
                Banner
            </div>
        </div>
    );
}

export default Banner;
