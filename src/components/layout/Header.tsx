import { HeartPulse, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';
import { useDisclosure } from '../../hooks/useDisclosure';

interface HeaderProps {
  brandName: string;
}

export function Header({ brandName }: HeaderProps) {
  const menu = useDisclosure();

  return (
    <header>
      <div className="nav">
        <a className="brand" href="#home" onClick={menu.close}>
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
            <a key={link.href} href={link.href} onClick={menu.close}>
              {link.label}
            </a>
          ))}
          <a className="navbtn" href="#appointment" onClick={menu.close}>
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
