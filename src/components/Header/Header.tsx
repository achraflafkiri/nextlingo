import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { menu } from './menu';
import './Header.scss';
import logo from "../../../public/images/logos/saas.png"
import Image from 'next/image';
export default function Header() {
    const t = useTranslations('Navigation');

    return (
        <header className="header wrapper border-bottom py-3">
            <nav className="navbar navbar-expand-md navbar-light">
                <Link href="#" className="navbar-brand d-flex align-items-center">
                    <Image src={logo} alt="Flowbite Logo" className="d-inline-block align-top" width={50} height={50} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-default"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-default">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        {
                            menu.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <Link href="#" className="nav-link active">
                                        {t(item.toLocaleLowerCase())}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <LocalSwitcher />
                </div>
            </nav>
        </header>
    );
}
