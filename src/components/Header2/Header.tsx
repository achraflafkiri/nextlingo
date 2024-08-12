import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { menu } from './menu';
import logo from "../../../public/images/logo/logo.png";
import Image from 'next/image';
import brand from '../../../public/text/brand';
import { medias } from "./medias";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <header className="header">
            <div className="container">
                <div className='d-flex align-items-center g-10 h-50 py-4'>
                    <div className="brand-logo text-center">
                        <div className="mb-2">
                            <Image src={logo} width={50} height={50} alt='logo' />
                        </div>
                        {brand.saas.name}
                    </div>
                    <div className="nav-items">
                        <ul>
                            {menu.map((link, index) => (
                                <li key={index}>
                                    <Link href="">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='d-flex align-items-center g-10 h-50 py-4'>
                    <div className="socials">
                        {medias.map(({ icon, link }, index) => (
                            <a key={index} href={link} className="social-icon">
                                <FontAwesomeIcon icon={icon} color='#fff' />
                            </a>
                        ))}
                    </div>
                    <LocalSwitcher />
                </div>
            </div>
        </header>
    );
}
