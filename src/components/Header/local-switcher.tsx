'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import Flag from 'react-world-flags';

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
        className="btn btn-light dropdown-toggle d-flex align-items-center"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        <i className="fas fa-cogs"></i> {/* Font Awesome settings icon */}
      </button>
      <ul
        className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => onSelectChange('en')}
            disabled={isPending}
          >
            <Flag code="GB" alt="English" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> {/* Flag for English */}
            English
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => onSelectChange('id')}
            disabled={isPending}
          >
            <Flag code="ID" alt="Indonesian" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> {/* Flag for Indonesian */}
            Indonesian
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => onSelectChange('fr')}
            disabled={isPending}
          >
            <Flag code="FR" alt="French" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> {/* Flag for French */}
            French
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => onSelectChange('zh')}
            disabled={isPending}
          >
            <Flag code="CN" alt="Chinese" style={{ width: '24px', height: '16px', marginRight: '8px' }} /> {/* Flag for Simplified Chinese */}
            Chinese (Simplified)
          </button>
        </li>
      </ul>
    </div>
  );
}
