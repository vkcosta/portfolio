'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();

  const links = [
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' }
  ];

  const normalizePath = (path: string) => path.replace(/\/$/, '');

  return (
    <nav className="bg-[#252525] backdrop-blur-md text-white shadow-lg rounded-full px-6 py-3 border border-white/10">
      {links.map(({ href, label }) => {
        const isActive = normalizePath(pathname || "") === normalizePath(href);
        return (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200
              ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-300 hover:text-blue-500'}
            `}
          >
            {label}
            {isActive && (
              <span className="left-1/2 -bottom-1 w-3/4 h-[2px] bg-blue-500 rounded-full transform -translate-x-1/2" />
            )}
          </Link>
        );
      })}
    </nav>
  )
}

export default Menu;