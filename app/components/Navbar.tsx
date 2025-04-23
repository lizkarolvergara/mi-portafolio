'use client';
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Disclosure } from "@headlessui/react";
import { useRef, useEffect } from "react";



export default function Navbar() {

    const activeId = useScrollSpy(['hero', 'skills', 'education', 'projects', 'contact'])

    const menuItems = [
        { id: 'hero', label: 'Sobre mí' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Formación' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' }
    ]
    
    const panelRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const panel = panelRef.current;
            const button = buttonRef.current;
            if (panel && !panel.contains(event.target as Node)
                && button && !button.contains(event.target as Node)
            ) {
                const activeEl = document.activeElement as HTMLElement;
                if (activeEl?.click) activeEl.click();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <Disclosure as="nav" className="sticky top-0 h-[68px] z-50 bg-[#191825]/70 backdrop-blur-sm border-b border-[#865DFF] shadow-sm text-xl  md:px-12 lg:px-24 md:flex md:justify-center lg:justify-end py-5">
            
            {({ open, close }) => (
                <>
                    <Disclosure.Button ref={buttonRef} className="md:hidden absolute right-6 top-6 z-50">
                        {open ? (
                            <img src="/icon-close.svg" alt="close menu" />
                        ) : (
                            <img src="/icon-hamburguer.svg" alt="open menu" />
                        )}
                        
                    </Disclosure.Button>
                    
                    <ul className="hidden md:flex gap-5 navbar-link">
                        {menuItems.map(item =>(
                            <li key={item.id}>
                                <a href={`#${item.id}`} className={activeId === item.id ? 'active' : ''} >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
        
                    <Disclosure.Panel>

                        <div ref={panelRef} className="md:hidden flex flex-col bg-[#191825]/95 gap-4 absolute top-[68px] w-full text-center py-4 animate-fade-slide-down">
                            {menuItems.map(item => (
                                <a key={item.id} href={`#${item.id}`} onClick={() => close()} className={` ${activeId === item.id ? 'text-[#865DFF] font-bold' : ''}`}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
            
                    </Disclosure.Panel>
                </>
            )}

        </Disclosure>
    )
}