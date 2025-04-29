'use client';
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Disclosure } from "@headlessui/react";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Link } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";


export default function Navbar() {

    //traducciones
    const t = useTranslations('navbar')

    //scroll
    const activeId = useScrollSpy(['hero', 'skills', 'education', 'projects', 'contact'])


    const menuItems = [ 
        { id: 'hero', label: t('about') },
        { id: 'skills', label: t('skills') },
        { id: 'education', label: t('education') },
        { id: 'projects', label: t('projects') },
        { id: 'contact', label: t('contact') }
      ]; //solo usable para el modo md y lg

    
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

    // Toggle dark-light
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
    }, []);

    if (!mounted) return null;

    //toggle inglés-español
    const locale = useLocale();


    return (
        <Disclosure as="nav" className="sticky top-0 h-[68px] z-50 bg-opacity-70  dark:bg-opacity-70 backdrop-blur-sm border-b border-[#865DFF] shadow-sm text-xl  md:px-12 lg:px-24 md:flex md:justify-center lg:justify-end py-5">

            
            {({ open, close }) => (
                <>
                    {/* botón hamburguesa */}
                    <Disclosure.Button ref={buttonRef} className="md:hidden absolute right-6 top-6 z-50 ">
                        {open ? (
                            <img src="/icon-close.svg" alt="close menu" className="icon-svg"/>
                        ) : (
                            <img src="/icon-hamburguer.svg" alt="open menu" className="icon-svg"/>
                        )}
                        
                    </Disclosure.Button>

                    {/* opciones del navbar solo en modo md y lg */}
                    <ul className={`${theme === 'dark' ? 'navbar-link-dark' : 'navbar-link'} hidden md:flex gap-5 md:pr-5`}>
                        {menuItems.map(item =>(
                            <li key={item.id}>
                                <a href={`#${item.id}`} className={activeId === item.id ? 'active' : ''} >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>



                    <div className="absolute left-4 md:left-auto md:right-6 flex flex-row-reverse md:flex-row">

                        {/* botón para cambiar idioma */}
                        <div className="pl-6">
                            {locale === 'es' ? (
                                <Link href="/" locale="en" >
                                EN
                                </Link>
                            ) : (
                                <Link href="/" locale="es" >
                                ES
                                </Link>
                            )}
                        </div>
                        {/* botón modo dark-light */}
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="pl-[10px]  md:pl-5 cursor-pointer">
                            {theme === 'dark' ? <img src="/m-light.svg" alt="mode"/> : <img src="/m-dark.svg" alt="mode"/>}
                            
                        </button>

                    </div>                   

                    {/* opciones del navbar del boton hamburguesa */}
                    <Disclosure.Panel>

                        <div ref={panelRef} className={`md:hidden flex flex-col gap-4 absolute top-[68px] w-full text-center py-4 animate-fade-slide-down ${ theme === 'dark' ? 'panel-bg-dark' : 'panel-bg-light' }`}>
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