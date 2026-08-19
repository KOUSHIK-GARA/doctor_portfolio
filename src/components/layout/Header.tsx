import type { MouseEvent } from 'react';
import { HeartPulse, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';
import { useDisclosure } from '../../hooks/useDisclosure';

interface HeaderProps {
  brandName: string;
  onBook: () => void;
}

export function Header({ brandName, onBook }: HeaderProps) {
  const menu = useDisclosure();

  // Smooth-scroll to the target section without pushing the hash onto the URL.
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    menu.close();
    const target = document.getElementById(href.replace(/^#/, ''));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div className="nav">
        <a className="brand" href="#home" onClick={(event) => handleNavClick(event, '#home')}>
          <HeartPulse size={28} />
          <span>{brandName}</span>
        </a>

        <button
          className="menu"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menu.isOpen}
          onClick={menu.toggle}
        >
          {menu.isOpen ? <X /> : <Menu />}
        </button>

        <nav className={menu.isOpen ? 'show' : ''}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => handleNavClick(event, link.href)}>
              {link.label}
            </a>
          ))}
          <button
            className="navbtn"
            type="button"
            onClick={() => {
              menu.close();
              onBook();
            }}
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
}
