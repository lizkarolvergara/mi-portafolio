'use client';
import { useScrollSpy } from "@/hooks/useScrollSpy";



export default function Navbar() {

    const activeId = useScrollSpy(['hero', 'skills', 'education', 'projects', 'contact'])

    return (
        <nav className="sticky top-0 z-50 flex justify-end py-5 border-b border-[#865DFF]  shadow-sm px-24 text-xl bg-[#191825]/70 backdrop-blur-sm">
            <ul className="flex gap-5 navbar-link">
                <li>
                    <a href="#hero" className={activeId === 'hero' ? 'active' : ''}>
                        Sobre mí
                    </a>
                </li>
                <li>
                    <a href="#skills" className={activeId === 'skills' ? 'active' : ''}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#education" className={activeId === 'education' ? 'active' : ''}>
                        Formación
                    </a>
                </li>
                <li>
                    <a href="#projects" className={activeId === 'projects' ? 'active' : ''}>
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#contact" className={activeId === 'contact' ? 'active' : ''}>
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    )
}