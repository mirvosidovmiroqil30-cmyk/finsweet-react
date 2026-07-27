import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Service', to: '/service' },
  { label: 'Company', to: '/company' },
  { label: 'Career', to: '/career' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact us', to: '/contact' },
];

interface NavbarProps {
  dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center">
      <Link
        to="/"
        className={`text-[22px] font-bold tracking-tight ${dark ? 'text-white' : 'text-[#1d2130]'}`}
      >
        {'{'}Finsweet
      </Link>

      <ul className="flex list-none gap-8 items-center m-0 p-0">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`text-[14px] no-underline transition-opacity
                  ${dark ? 'text-white opacity-85 hover:opacity-100' : 'text-[#1d2130] hover:text-[#444cf7]'}
                  ${isActive ? (dark ? 'opacity-100 font-semibold' : 'text-[#444cf7] font-semibold') : ''}
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to="#"
            className={`text-[14px] font-medium no-underline ${dark ? 'text-[#ffd3af]' : 'text-[#444cf7]'}`}
          >
            Clone project &rarr;
          </Link>
        </li>
      </ul>
    </nav>
  );
}


