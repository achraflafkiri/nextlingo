import React from 'react';
import "./Price.scss";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Price = () => {
    const t = useTranslations('Price');

    const prices = [
        {
            id: 1,
            title: "Free Trial",
            description: t('freeTrialDescription'),
            price: 0.0,
            features: [
                t('feature1'),
                t('feature2'),
                t('feature3'),
                t('feature4'),
                t('feature5'),
                t('feature6'),
            ]
        },
        {
            id: 2,
            title: "Basic Plan",
            description: t('basicPlanDescription'),
            price: 19.99,
            features: [
                t('feature1'),
                t('feature2'),
                t('feature3'),
                t('feature4'),
                t('feature5'),
                t('feature6'),
                t('feature7'),
                t('feature8'),
                t('feature9'),
                t('feature10'),
                t('feature11'),
                t('feature12')
            ]
        },
        {
            id: 3,
            title: "Pro Plan",
            description: t('proPlanDescription'),
            price: 49.99,
            features: [
                t('feature1'),
                t('feature2'),
                t('feature3'),
                t('feature4'),
                t('feature5'),
                t('feature6'),
                t('feature7'),
                t('feature8'),
                t('feature9'),
                t('feature10'),
                t('feature11'),
                t('feature12')
            ]
        },
        {
            id: 4,
            title: "Enterprise Plan",
            description: t('enterprisePlanDescription'),
            price: 99.99,
            features: [
                t('feature1'),
                t('feature2'),
                t('feature3'),
                t('feature4'),
                t('feature5'),
                t('feature6'),
                t('feature7'),
                t('feature8'),
                t('feature9'),
                t('feature10'),
                t('feature11'),
                t('feature12')
            ]
        }
    ];

    return (
        <div className='price default-padding'>
            <div className="wrapper">
                <h2 className='section_title'>
                    {t('title')}
                </h2>
                <p className='section_subtitle'>
                    {t('subtitle')}
                </p>
                <div className="prices">
                    {prices.map((plan) => (
                        <div key={plan.id} className="price_card">
                            <h3 className="price_title">{plan.title}</h3>
                            <p className="price_description">{plan.description}</p>
                            <p className="price_amount">${plan.price.toFixed(2)}</p>
                            <ul className="price_features p-0">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="price_feature">
                                        <Link href='#' className='text-white d-flex align-items-center'>
                                            <FontAwesomeIcon icon={faCheckCircle} className='feature_icon' />
                                            {feature}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <button className="price_button">Get Started</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Price;
