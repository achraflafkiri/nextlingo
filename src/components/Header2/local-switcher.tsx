'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { languageOptions } from "./languages"

export default function LocalSwitcher() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle d-flex align-items-center"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        <FontAwesomeIcon icon={faCog} fontSize={20} color='rgba(0,0,0,.87)' />
      </button>
      <ul
        className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
      >
        <li className='py-2 ps-4'>
          <span className='h-full w-full lang_title'>language</span>
        </li>
        {languageOptions.map(({ code, flag, label }) => (
          <li key={code} className='lang_item'>
            <button
              className="dropdown-item d-flex align-items-center"
              onClick={() => onSelectChange(code)}
              disabled={isPending}
            >
              <div className="lang_flag">
                <Flag code={flag} alt={label} style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              </div>
              <span className='lang_label'>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
