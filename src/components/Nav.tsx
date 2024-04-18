import { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Imagen PNG en lugar del enlace de texto "Portafolio" */}
        <img src="/public/images/logo.png" alt="Portafolio" className="h-10 p-" />

        {/* Botón de menú para móviles */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          <span>☰</span>
        </button>

        {/* Menú desplegable móvil */}
        <div className={`absolute right-0 top-full bg-black shadow-lg transition-all duration-500 ease-in ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} overflow-hidden md:opacity-100`}
             style={{ width: 'auto', height: isOpen ? 'calc(100vh - 4rem)' : '0' }}>
          {[
            { name: 'Home', href: '#home', icon: <AiOutlineHome /> },
            { name: 'About', href: '#about', icon: <AiOutlineUser /> },
            { name: 'Service', href: '#service', icon: <MdOutlineMiscellaneousServices /> },
            { name: 'Portfolio', href: '#portfolio', icon: <AiOutlineProject /> },
            { name: 'Contact', href: '#contact', icon: <AiOutlineMail /> },
          ].map((item) => (
            <a href={item.href} key={item.name} className="block px-4 py-2 text-white hover:text-gray-300 transition duration-300 ease-in-out flex items-center">
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Menú para tablet y escritorio */}
        <div className="hidden md:flex space-x-4">
          {[
            { name: 'Home', href: '#home', icon: <AiOutlineHome /> },
            { name: 'About', href: '#about', icon: <AiOutlineUser /> },
            { name: 'Service', href: '#service', icon: <MdOutlineMiscellaneousServices /> },
            { name: 'Portfolio', href: '#portfolio', icon: <AiOutlineProject /> },
            { name: 'Contact', href: '#contact', icon: <AiOutlineMail /> },
          ].map((item) => (
            <a href={item.href} key={item.name} className="text-white hover:text-gray-300 px-4 py-2 flex items-center">
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
