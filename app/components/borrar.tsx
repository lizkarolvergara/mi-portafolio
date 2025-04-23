'use client';
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
    const activeId = useScrollSpy(['hero', 'skills', 'education', 'projects', 'contact'])
  
    return (
      <Disclosure as="nav" className="sticky top-0 z-50 bg-[#191825]/70 backdrop-blur-sm border-b border-[#865DFF] shadow-sm px-6 md:px-12 lg:px-24 text-xl">
        {({ open }) => (
          <>
            {/* 🔹 HEADER: solo visible en mobile */}
            <div className="flex justify-between items-center py-4 lg:hidden">
              <span className="text-xl font-semibold">Liz Karol</span>
  
              {/* 🔹 Botón hamburguesa */}
              <Disclosure.Button className="text-white">
                <img
                  src={open ? "/icon-close.svg" : "/icon-hamburger.svg"}
                  alt="menu"
                  className="h-6 w-6"
                />
              </Disclosure.Button>
            </div>
  
            {/* 🔹 NAV DESKTOP: se muestra solo en lg */}
            <ul className="hidden lg:flex justify-end gap-5 navbar-link py-4">
              {['hero', 'skills', 'education', 'projects', 'contact'].map(id => (
                <li key={id}>
                  <a href={`#${id}`} className={activeId === id ? 'active' : ''}>
                    {id === 'hero' ? 'Sobre mí' : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
  
            {/* 🔹 NAV MOBILE: se muestra solo si open está true */}
            <Disclosure.Panel className="flex flex-col gap-4 pb-4 lg:hidden">
              {['hero', 'skills', 'education', 'projects', 'contact'].map(id => (
                <a key={id} href={`#${id}`} className={`pl-2 ${activeId === id ? 'active' : ''}`}>
                  {id === 'hero' ? 'Sobre mí' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }
  